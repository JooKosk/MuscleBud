import React, { useState } from 'react'
import { login } from '../services/login'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import {
  MyTextField,
  FormContainer,
  FormItemContainer,
  LoginButton,
} from './styling'
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
    <FormContainer>
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
            <Form onSubmit={handleSubmit}>
              <FormItemContainer>
                <MyTextField label="username" name="username" type="text" />
                <MyTextField label="password" name="password" type="password" />
                <LoginButton disabled={isSubmitting} type="submit">
                  LOG IN
                </LoginButton>
                <div>
                  <p>
                    Not yet registered?{' '}
                    <Link
                      style={{ textDecoration: 'none', color: 'blue' }}
                      to="/register"
                    >
                      Create an account.
                    </Link>
                  </p>
                </div>
              </FormItemContainer>
            </Form>
          )
        }}
      </Formik>
    </FormContainer>
  )
}
export default LoginForm
