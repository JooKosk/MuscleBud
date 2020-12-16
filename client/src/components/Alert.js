import React from 'react'
import { SuccessWrapper, ErrorWrapper } from './styling'

const Alert = ({ message, err }) => {
  if (!message) {
    return null
  }

  if (err) {
    return <ErrorWrapper>{message}</ErrorWrapper>
  } else if (!err) {
    return <SuccessWrapper>{message}</SuccessWrapper>
  }
}

export default Alert
