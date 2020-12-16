import React, { useState } from 'react'
import { login } from '../services/login'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import Alert from './Alert'
import {
  LoginTextField,
  FormWrapper,
  CenteredForm,
  LoginButton,
} from './styling'
const validationSchema = yup.object({
  username: yup.string().required().min(3),
  password: yup.string().required(),
})

const LoginForm = ({ setUser }) => {
  const [message, setMessage] = useState(null)
  const [alertError, setAlertError] = useState(false)
  const handleLogin = async ({ username, password }) => {
    try {
      const user = await login({
        username,
        password,
      })
      window.localStorage.setItem('User', JSON.stringify(user))
      setUser(user)
    } catch (e) {
      setAlertError(true)
      setMessage('Wrong username or password')
      setTimeout(() => {
        setMessage(null)
        setAlertError(!alertError)
      }, 5000)
    }
  }

  return (
    <FormWrapper>
      <h1>Sign in to MuscleBud</h1>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values, { setSubmitting }) => {
          console.log('submitting', values)
          handleLogin(values)
          setSubmitting(false)
        }}
        validationSchema={validationSchema}
      >
        {(props) => {
          const { isSubmitting, handleSubmit } = props
          return (
            <CenteredForm onSubmit={handleSubmit}>
              <Alert message={message} err={alertError} />
              <LoginTextField label="Username" name="username" type="text" />
              <LoginTextField
                label="Password"
                name="password"
                type="password"
              />
              <LoginButton disabled={isSubmitting} type="submit">
                Log in
              </LoginButton>
              <p>
                Not yet registered?{' '}
                <Link
                  style={{ textDecoration: 'none', color: 'blue' }}
                  to="/register"
                >
                  Create an account.
                </Link>
              </p>
            </CenteredForm>
          )
        }}
      </Formik>
    </FormWrapper>
  )
}
export default LoginForm
