import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from 'react-router-dom'
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike'
import { navBarStyles } from './styling'

const Navbar = ({ setUser }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const classes = navBarStyles()
  const logout = () => {
    window.localStorage.removeItem('User')
    setUser(null)
  }
  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button
            size="small"
            variant="outlined"
            color="inherit"
            background="inherit"
            component={Link}
            to="/"
          >
            Home
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="inherit"
            className={classes.menuItem}
            aria-controls="training-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            startIcon={<ArrowDropDownIcon />}
          >
            Training plans
          </Button>
          <Menu
            id="training-menu"
            keepMounted
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem component={Link} to="/planner" onClick={handleMenuClose}>
              <ListItemIcon>
                <FitnessCenterIcon fontSize="small"></FitnessCenterIcon>
              </ListItemIcon>
              <ListItemText primary="New plan" />
            </MenuItem>
            <MenuItem component={Link} to="/plans" onClick={handleMenuClose}>
              <ListItemIcon>
                <DirectionsBikeIcon fontSize="small"></DirectionsBikeIcon>
              </ListItemIcon>
              <ListItemText primary="All plans" />
            </MenuItem>
          </Menu>
          <Button
            size="small"
            variant="outlined"
            color="inherit"
            startIcon={<ExitToAppIcon />}
            onClick={logout}
            className={classes.logoutButton}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
