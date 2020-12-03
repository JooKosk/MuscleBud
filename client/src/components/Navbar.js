import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

const Navbar = () => {
  const logout = () => {
    window.localStorage.removeItem('User')
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/planner">
          Workout Planner
        </Button>
        <Button color="inherit" component={Link} to="/plans">
          Workout Plans
        </Button>
        <Button color="inherit" onClick={logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
