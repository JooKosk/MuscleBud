import React from 'react'
import { login } from '../services/login'
import { Formik, Form } from 'formik'
import { MyTextField } from './RoutineForm'
import { StyledButton, LoginWrapper } from './styling'
import * as yup from 'yup'
import { Link } from 'react-router-dom'

const validationSchema = yup.object({
  username: yup.string().required().min(3),
  password: yup.string().required(),
})

const LoginForm = ({ setUser }) => {
  const handleLogin = async ({ username, password }) => {
    const user = await login({
      username,
      password,
    })
    window.localStorage.setItem('User', JSON.stringify(user))
    setUser(user)
  }

  return (
    <LoginWrapper>
      <h1>Welcome to MuscleBud!</h1>
      <h2>Log in to view your feed</h2>
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
                  type="input"
                />
              </div>
              <StyledButton disabled={isSubmitting} type="submit">
                Login
              </StyledButton>
              <StyledButton component={Link} to="/register">
                Sign up
              </StyledButton>
            </Form>
          )
        }}
      </Formik>
    </LoginWrapper>
  )
}
/*
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
    */
export default LoginForm
