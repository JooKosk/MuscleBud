import React, { useState } from 'react'

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
        <button onClick={toggleSwitch}></button>
      </div>
      <div style={show}>
        {props.children}
        <button onClick={toggleSwitch}>Hide</button>
      </div>
    </div>
  )
}

export default Togglable
