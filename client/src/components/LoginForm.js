import React, { useState } from 'react'
import { login } from '../services/login'
import { Formik, Form } from 'formik'
import { MyTextField } from './RoutineForm'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import { Alert } from '@material-ui/lab'
import { Button } from '@material-ui/core'
import blue from '@material-ui/core/colors/blue'
import {
  containerStyles,
  SignUpDiv,
  buttonStyles,
  FormContainer,
} from './styling'

const validationSchema = yup.object({
  username: yup.string().required().min(3),
  password: yup.string().required(),
})

const LoginForm = ({ setUser }) => {
  const classes = containerStyles()
  const btnClasses = buttonStyles()
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
    <div className={classes.root}>
      <h1>Sign in to MuscleBud</h1>
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
              <FormContainer>
                <MyTextField
                  placeholder="Username"
                  name="username"
                  type="input"
                />
                <MyTextField
                  placeholder="Password"
                  name="password"
                  type="password"
                />
                <Button
                  classes={{ root: btnClasses.root }}
                  disabled={isSubmitting}
                  type="submit"
                >
                  Log in
                </Button>
              </FormContainer>
              <SignUpDiv>
                <p>
                  Not yet registered?{' '}
                  <Link
                    style={{ textDecoration: 'none', color: blue[800] }}
                    to="/register"
                  >
                    Create an account.
                  </Link>
                </p>
              </SignUpDiv>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
export default LoginForm
