import React from 'react'
import { Formik } from 'formik'
import planService from '../services/plans'
import * as yup from 'yup'
import { SubmitButton } from '../styling/mixins'
import { FlexForm, MyTextField } from '../styling/forms'

const validationSchema = yup.object({
  name: yup.string().required().max(25),
  author: yup.string().required().max(20),
})

const RoutineForm = ({ plans, setPlans }) => {
  const addPlan = async (data) => {
    const workoutPlan = {
      ...data,
    }
    await planService.create(workoutPlan)
  }
  return (
    <Formik
      initialValues={{
        name: '',
        author: '',
        workoutType: '',
        equipment: [''],
        workoutDays: '',
        description: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        console.log('submit', data)
        addPlan(data)
        resetForm()
        setSubmitting(false)
      }}
    >
      {({ values, errors, isSubmitting, handleChange }) => (
        <FlexForm>
          <h2>Post your workout plan here!</h2>
          <label htmlFor="workoutType">Workout type:</label>
          <input name="workoutType" type="radio" value={values.workoutType} />
          <input name="workoutType" type="radio" value="Upper body" />
          <input name="workoutType" type="radio" value={values.workoutType} />
          <input name="workoutType" type="radio" value={values.workoutType} />
          <MyTextField label="Plan name" name="name" type="text" />
          <MyTextField label="Author name" name="author" type="text" />
          <MyTextField label="Days / week" name="workoutDays" type="number" />
          <MyTextField
            label="Required equipment"
            name="equipment"
            type="text"
          />
          <MyTextField
            label="Plan description"
            name="description"
            type="text"
          />
          <SubmitButton disabled={isSubmitting} type="submit">
            submit
          </SubmitButton>
        </FlexForm>
      )}
    </Formik>
  )
}

export default RoutineForm
