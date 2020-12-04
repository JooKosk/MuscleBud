import React, { useState } from 'react'
import { login } from '../services/login'
import { Formik, Form, useField } from 'formik'
import {
  TextField,
  Button,
  RadioGroup,
  FormLabel,
  Radio,
  FormControlLabel,
} from '@material-ui/core'

const LoginForm = ({ setUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Formik>
      <Form
        onSubmit={async (e) => {
          e.preventDefault()
          try {
            const user = await login({
              username,
              password,
            })

            window.localStorage.setItem('User', JSON.stringify(user))
            setUser(user)
          } catch (e) {}
        }}
      >
        <div>
          <input
            type="text"
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <input
          type="text"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </Form>
    </Formik>
  )
}
export default LoginForm
