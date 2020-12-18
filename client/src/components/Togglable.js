import React, { useState } from 'react'
import { BlueButton } from '../styling/mixins'

const Togglable = (props) => {
  const [visible, setVisible] = useState(false)
  const hide = { display: visible ? 'none' : '' }
  const show = { display: visible ? '' : 'none' }

  const toggleSwitch = () => {
    setVisible(!visible)
  }

  return (
    <>
      <div style={hide}>
        <BlueButton title={props.title} onClick={toggleSwitch}>
          {props.icon} {props.buttonLabel}
        </BlueButton>
      </div>
      <div style={show}>
        {props.children}
        <BlueButton onClick={toggleSwitch}>Hide</BlueButton>
      </div>
    </>
  )
}

export default Togglable
