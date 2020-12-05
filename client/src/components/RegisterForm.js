import React, { useState } from 'react'
import { register } from '../services/register'
import { Formik, Form } from 'formik'
import { MyTextField } from './RoutineForm'
import { Alert } from '@material-ui/lab'
import { StyledButton, SignUpButton, LoginWrapper } from './styling'
import * as yup from 'yup'
import { Link, useHistory } from 'react-router-dom'
const validationSchema = yup.object({
  name: yup
    .string()
    .label('Name')
    .required()
    .min(2, 'Must be at least 2 characters long'),
  username: yup.string().required().min(3),
  password: yup
    .string()
    .required('Enter your username')
    .min(4, 'Password must have more than 4 characters'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], "Passwords don't match")
    .required('Confirm your password'),
})

const RegisterForm = () => {
  let [alertMessage, setAlertMessage] = useState(null)
  let [alertStatus, setAlertStatus] = useState('success')
  let history = useHistory()
  const handleRegistration = async ({ name, username, password }) => {
    try {
      const res = await register({
        name,
        username,
        password,
      })
      if (res) {
        setAlertStatus('success')
        setAlertMessage('Registration succesful! You are being redirected..')
        setTimeout(() => {
          setAlertMessage(null)
          history.push('/')
        }, 6000)
      }
    } catch (e) {
      setAlertStatus('error')
      setAlertMessage('That username is already taken..')
      setTimeout(() => {
        setAlertMessage(null)
      }, 6000)
    }
    /*
    
    */
  }
  return (
    <LoginWrapper>
      <h1>Sign up for MuscleBud</h1>
      <div>
        {alertMessage && (
          <Alert style={{ margin: '1rem' }} severity={alertStatus}>
            {alertMessage}
          </Alert>
        )}
      </div>
      <Formik
        initialValues={{
          name: '',
          username: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleRegistration(values)
          resetForm()
          setSubmitting(false)
        }}
        validationSchema={validationSchema}
      >
        {(props) => {
          const { isSubmitting, handleSubmit } = props
          return (
            <Form onSubmit={handleSubmit}>
              <div>
                <MyTextField placeholder="Name" name="name" type="input" />
              </div>
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
              <div>
                <MyTextField
                  placeholder="Confirm password"
                  name="confirmPassword"
                  type="password"
                />
              </div>
              <StyledButton component={Link} to="/">
                {'<-'} Back
              </StyledButton>
              <SignUpButton disabled={isSubmitting} type="submit">
                Sign up
              </SignUpButton>
            </Form>
          )
        }}
      </Formik>
    </LoginWrapper>
  )
}

export default RegisterForm
