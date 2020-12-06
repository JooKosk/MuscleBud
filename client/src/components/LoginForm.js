import React, { useState } from 'react'
import { login } from '../services/login'
import { Formik, Form } from 'formik'
import { MyTextField } from './RoutineForm'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import { Alert } from '@material-ui/lab'
import { Button } from '@material-ui/core'

const validationSchema = yup.object({
  username: yup.string().required().min(3),
  password: yup.string().required(),
})

const LoginForm = ({ setUser }) => {
  const [message, setMessage] = useState(null)
  const handleLogin = async ({ username, password }) => {
    try {
      const user = await login({
        username,
        password,
      })
      window.localStorage.setItem('User', JSON.stringify(user))
      setUser(user)
    } catch (e) {
      setMessage('Wrong username or password')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  return (
    <div>
      <h1>Welcome to MuscleBud!</h1>
      <h2>Login to view your feed</h2>
      <div>
        {message && (
          <Alert style={{ margin: '1rem' }} severity="error">
            {message}
          </Alert>
        )}
      </div>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values, { setSubmitting }) => {
          handleLogin(values)
          setSubmitting(false)
        }}
        validationSchema={validationSchema}
      >
        {(props) => {
          const { isSubmitting, handleSubmit } = props
          return (
            <Form onSubmit={handleSubmit}>
              <div>
                <MyTextField
                  placeholder="Username"
                  name="username"
                  type="input"
                />
              </div>
              <div>
                <MyTextField
                  placeholder="Password"
                  name="password"
                  type="password"
                />
              </div>
              <Button disabled={isSubmitting} type="submit">
                Login
              </Button>
              <Button component={Link} to="/register">
                Sign up
              </Button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
export default LoginForm
