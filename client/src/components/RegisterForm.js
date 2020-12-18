import React, { useState } from 'react'
import { register } from '../services/register'
import { Formik } from 'formik'
import * as yup from 'yup'
import Alert from './Alert'
import { useHistory } from 'react-router-dom'
import { LoginButton } from '../styling/mixins'
import { MyTextField, FormWrapper, RegForm } from '../styling/forms'

const validationSchema = yup.object({
  name: yup
    .string()
    .required('First name is required')
    .min(2, 'Must be at least 2 characters long'),
  username: yup.string().required('Username is required').min(3),
  password: yup
    .string()
    .required('Password is required')
    .min(4, 'Password must have more than 4 characters'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], "Passwords don't match")
    .required('Confirm password'),
})

const RegisterForm = () => {
  let [alertMessage, setAlertMessage] = useState(null)
  let [alertError, setAlertError] = useState(false)
  let history = useHistory()
  const handleRegistration = async ({ name, username, password }) => {
    try {
      const res = await register({
        name,
        username,
        password,
      })
      if (res) {
        setAlertMessage('Registration succesful! Redirecting...')
        setTimeout(() => {
          setAlertMessage(null)
          history.push('/')
        }, 6000)
      }
    } catch (e) {
      setAlertError(true)
      setAlertMessage('That username is already taken...')
      setTimeout(() => {
        setAlertError(false)
        setAlertMessage(null)
      }, 6000)
    }
  }
  return (
    <FormWrapper>
      <h1>Create your Musclebud account</h1>
      <Formik
        initialValues={{
          name: '',
          username: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleRegistration(values)
          if (!alertMessage === 'That username is already taken..') {
            resetForm()
          }
          setSubmitting(false)
        }}
        validationSchema={validationSchema}
      >
        {(props) => {
          const { isSubmitting, handleSubmit } = props
          return (
            <RegForm onSubmit={handleSubmit}>
              <Alert message={alertMessage} err={alertError} />
              <MyTextField label="First name" name="name" type="text" />
              <MyTextField label="Username" name="username" type="text" />
              <MyTextField label="Password" name="password" type="password" />
              <MyTextField
                label="Confirm password"
                name="confirmPassword"
                type="password"
              />
              <LoginButton disabled={isSubmitting} type="submit">
                Create Account
              </LoginButton>
            </RegForm>
          )
        }}
      </Formik>
    </FormWrapper>
  )
}

export default RegisterForm
