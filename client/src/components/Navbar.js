import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { NavButton, DropDownLink } from '../styling/mixins'
import {
  NavbarWrapper,
  DropDownContent,
  DropDownMenu,
} from '../styling/wrappers'

const Navbar = ({ setUser }) => {
  const logout = () => {
    window.localStorage.removeItem('User')
    setUser(null)
  }
  return (
    <NavbarWrapper>
      <div>
        <Link to="/">
          <NavButton> Home</NavButton>
        </Link>
        <DropDownMenu>
          <NavButton>
            {' '}
            <FontAwesomeIcon style={{ marginRight: 5 }} icon={faCaretDown} />
            Training
          </NavButton>
          <DropDownContent>
            <DropDownLink to="/planner">Training plans</DropDownLink>
            <DropDownLink to="/calendar">Calendar</DropDownLink>
          </DropDownContent>
        </DropDownMenu>
      </div>
      <div>
        <NavButton onClick={logout}>
          Sign out
          <FontAwesomeIcon style={{ marginLeft: 5 }} icon={faArrowRight} />
        </NavButton>
      </div>
    </NavbarWrapper>
  )
}

export default Navbar
