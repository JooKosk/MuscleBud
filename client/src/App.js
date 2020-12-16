import React, { useState, useEffect } from 'react'
import RoutineForm from './components/RoutineForm'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import PlanInfo from './components/PlanInfo'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Plans from './components/Plans'
import Footer from './components/Footer'
import planService from './services/plans'
import workoutService from './services/workouts'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from './components/styling'

const App = () => {
  const [user, setUser] = useState(null)
  const [plans, setPlans] = useState([])
  const [workouts, setWorkouts] = useState([])
  const [date, setDate] = useState(new Date())
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
      workoutService.setToken(user.token)
    }
  }, [])

  if (!user) {
    return (
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
    )
  }
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Navbar setUser={setUser} />
        <Switch>
          <Route path="/planner">
            <RoutineForm plans={plans} setPlans={setPlans} />
          </Route>
          <Route path="/calendar">
            <Calendar onChange={setDate} value={date} />
          </Route>
          <Route path="/plans/:id">
            <PlanInfo plans={plans} />
          </Route>
          <Route path="/plans">
            <Plans plans={plans} />
          </Route>
          <Route path="/">
            <Home workouts={workouts} user={user} />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
