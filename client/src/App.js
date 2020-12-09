import React, { useState, useEffect } from 'react'
import RoutineForm from './components/RoutineForm'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import PlanInfo from './components/PlanInfo'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Plans from './components/Plans'
import planService from './services/plans'
import workoutService from './services/workouts'
import { ThemeProvider } from '@material-ui/core/styles'
import Theme from './components/styling'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  const [user, setUser] = useState(null)
  const [plans, setPlans] = useState([])
  const [workouts, setWorkouts] = useState([])
  useEffect(() => {
    planService.getAll().then((plans) => setPlans(plans))
    workoutService.getAll().then((workouts) => setWorkouts(workouts))
  }, [])

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('User')
    if (loggedUser) {
      const user = JSON.parse(loggedUser)
      setUser(user)
      planService.setToken(user.token)
    }
  }, [])

  if (!user) {
    return (
      <ThemeProvider theme={Theme}>
        <div>
          <Router>
            <Switch>
              <Route path="/register">
                <RegisterForm />
              </Route>
              <Route path="/">
                <LoginForm setUser={setUser} />
              </Route>
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    )
  }
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Navbar setUser={setUser} />
        <Switch>
          <Route path="/planner">
            <RoutineForm plans={plans} setPlans={setPlans} />
          </Route>
          <Route path="/plans/:id">
            <PlanInfo plans={plans} />
          </Route>
          <Route path="/plans">
            <Plans plans={plans} />
          </Route>
          <Route path="/">
            <Home workouts={workouts} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
