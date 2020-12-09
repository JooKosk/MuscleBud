import React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import planService from '../services/plans'

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
    <div>
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
          <Form>
            <h2>Post your workout plan here!</h2>
            <label htmlFor="workoutType">Workout type:</label>
            <input name="workoutType" type="radio" value={values.workoutType} />
            <input name="workoutType" type="radio" value="Upper body" />
            <input name="workoutType" type="radio" value={values.workoutType} />
            <input name="workoutType" type="radio" value={values.workoutType} />
            <input
              placeholder="Abcrusher 2000"
              name="name"
              type="text"
              value={values.name}
            />
            <input
              placeholder="Jeremy"
              name="author"
              type="text"
              value={values.author}
            />
            <input placeholder="3" name="workoutDays" type="number" />
            <input placeholder="Barbells" name="equipment" type="text" />
            <input
              placeholder="three day split.."
              name="description"
              type="text"
            />
            <button disabled={isSubmitting} type="submit">
              submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RoutineForm
