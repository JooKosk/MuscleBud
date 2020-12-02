import React, { useState, useEffect } from 'react'
import RoutineForm from './components/RoutineForm'
import PlanInfo from './components/PlanInfo'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Plans from './components/Plans'
import planService from './services/plans'
import workoutService from './services/workouts'
import Container from '@material-ui/core/Container'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  const [plans, setPlans] = useState([])
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    planService.getAll().then((plans) => setPlans(plans))
    workoutService.getAll().then((workouts) => setWorkouts(workouts))
  }, [])

  return (
    <Container>
      <Router>
        <div>
          <Navbar />
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
