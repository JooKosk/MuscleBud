import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          home
        </Button>
        <Button color="inherit" component={Link} to="/planner">
          notes
        </Button>
        <Button color="inherit" component={Link} to="/plans">
          users
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
