import React, { useState } from 'react'
import RoutineForm from './components/RoutineForm'
import PlanInfo from './components/PlanInfo'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Plans from './components/Plans'
import Container from '@material-ui/core/Container'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  const [plans, setPlans] = useState([])
  console.log(plans)
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
            <Home />
          </Route>
        </Switch>
      </Router>
    </Container>
  )
}

export default App
