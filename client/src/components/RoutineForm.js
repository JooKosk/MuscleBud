import React from 'react'
import { Formik, Form, useField } from 'formik'
import {
  TextField,
  Button,
  RadioGroup,
  FormLabel,
  Radio,
  FormControlLabel,
} from '@material-ui/core'
import * as yup from 'yup'
import planService from '../services/plans'
import { routineFormStyles, routineFormContStyles } from './styling'

const validationSchema = yup.object({
  name: yup.string().required().max(25),
  author: yup.string().required().max(20),
})

const MyRadioButton = ({ label, ...props }) => {
  const [field] = useField(props)
  return <FormControlLabel {...field} control={<Radio />} label={label} />
}

export const MyTextField = ({ placeholder, type, ...props }) => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ''
  return (
    <TextField
      placeholder={placeholder}
      type={type}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  )
}
const RoutineForm = ({ plans, setPlans }) => {
  const contClass = routineFormContStyles()
  const formClass = routineFormStyles()
  const addPlan = async (data) => {
    const workoutPlan = {
      ...data,
    }
    await planService.create(workoutPlan)
  }
  return (
    <div className={contClass.root}>
      <div className={formClass.root}>
        <h2>Post your workout plan here!</h2>
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
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true)
            console.log('submit', data)
            addPlan(data)
            setSubmitting(false)
          }}
        >
          {({ values, errors, isSubmitting }) => (
            <Form>
              <div>
                <FormLabel component="legend">Workout type:</FormLabel>
                <RadioGroup>
                  <MyRadioButton
                    name="workoutType"
                    type="radio"
                    value="Full body"
                    label="Full body"
                  />
                  <MyRadioButton
                    name="workoutType"
                    type="radio"
                    value="Upper body"
                    label="Upper body"
                  />
                  <MyRadioButton
                    name="workoutType"
                    type="radio"
                    value="Lower body"
                    label="Lowerbody"
                  />
                  <MyRadioButton
                    name="workoutType"
                    type="radio"
                    value="Core"
                    label="Core"
                  />
                </RadioGroup>
              </div>
              <div>
                <MyTextField
                  label="Plan name:"
                  placeholder="Abcrusher 2000"
                  name="name"
                  type="input"
                />
              </div>
              <div>
                <MyTextField
                  label="Plan author:"
                  placeholder="Jeremy"
                  name="author"
                  type="input"
                />
              </div>
              <div>
                <MyTextField
                  label="Days per week:"
                  placeholder="3"
                  name="workoutDays"
                  type="input"
                />
              </div>
              <div>
                <MyTextField
                  label="Equipment:"
                  placeholder="Barbells"
                  name="equipment"
                  type="input"
                />
              </div>
              <div>
                <MyTextField
                  style={{ paddingTop: 10 }}
                  label="Description:"
                  placeholder="Three day split.."
                  name="description"
                  type="input"
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </div>
              <Button disabled={isSubmitting} type="submit">
                submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default RoutineForm
