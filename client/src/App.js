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
import { Container, Button } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

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
    }
  }, [])

  if (user === null) {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/register">
              <RegisterForm />
            </Route>
            <Route path="/">
              <LoginForm setUser={setUser} />
              <Button color="inherit" component={Link} to="/register">
                Sign up
              </Button>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
  return (
    <Container>
      <Router>
        <div>
          <Navbar setUser={setUser} />
        </div>
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
    </Container>
  )
}

export default App
