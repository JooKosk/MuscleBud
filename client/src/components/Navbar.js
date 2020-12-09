import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ setUser }) => {
  const logout = () => {
    window.localStorage.removeItem('User')
    setUser(null)
  }
  return (
    <div>
      <button
        size="small"
        color="inherit"
        background="inherit"
        component={Link}
        to="/"
      >
        Home
      </button>
      <button size="small" color="inherit">
        Training plans
      </button>
      <button size="small" color="inherit" onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export default Navbar
