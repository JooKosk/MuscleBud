import React, { useState } from 'react'
import { BlueButton } from './styling'

const Togglable = (props) => {
  const [visible, setVisible] = useState(false)

  const hide = { display: visible ? 'none' : '' }
  const show = { display: visible ? '' : 'none' }

  const toggleSwitch = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div style={hide}>
        <BlueButton onClick={toggleSwitch}>{props.buttonLabel}</BlueButton>
      </div>
      <div style={show}>
        {props.children}
        <BlueButton onClick={toggleSwitch}>Hide</BlueButton>
      </div>
    </div>
  )
}

export default Togglable
