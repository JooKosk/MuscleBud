import React from 'react'
import {
  FormWrapper,
  CenteredForm,
  MyTextField,
  MyBigTextField,
  MyDateField,
  MySelect,
} from '../styling/forms'
import { LoginButton } from '../styling/mixins'
import { create } from '../services/workouts'
import { Formik } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object({
  workoutName: yup.string().required('Workout name is required'),
  workoutType: yup.string().required('Workout type is required'),
  startTime: yup.date().required('Start time is required'),
  endTime: yup.date().required('End time is required'),
  description: yup.string().max(140),
})

const workoutTimeToString = (endTime, startTime) => {
  let difference = Math.abs(endTime - startTime)

  let ms = difference % 1000
  difference = (difference - ms) / 1000
  let s = difference % 60
  difference = (difference - s) / 60
  let m = difference % 60
  difference = (difference - m) / 60
  let h = difference

  let ss = s <= 9 && s >= 0 ? `0${s}` : s
  let mm = m <= 9 && m >= 0 ? `0${m}` : m
  let hh = h <= 9 && h >= 0 ? `0${h}` : h

  return hh + 'h' + ':' + mm + 'min' + ':' + ss + 's'
}

const WorkoutForm = () => {
  const addWorkout = async (values) => {
    console.log(values)
    const workoutPost = {
      workoutName:
        values.workoutName.toLowerCase().charAt(0).toUpperCase() +
        values.workoutName.toLowerCase().slice(1),
      workoutType: values.workoutType,
      duration: values.duration,
      description: values.description,
      likes: values.likes,
    }
    try {
      await create(workoutPost)
    } catch (e) {
      //catch error here
    }
  }
  return (
    <FormWrapper>
      <Formik
        initialValues={{
          workoutName: '',
          workoutType: 'Running',
          startTime: '',
          endTime: '',
          description: '',
          duration: '',
          likes: 0,
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          values.likes = 0
          console.log('submitting', values)
          let startTime = new Date(values.endTime).getTime()
          let endTime = new Date(values.startTime).getTime()
          values.duration = workoutTimeToString(endTime, startTime)
          addWorkout(values)
          resetForm()
          setSubmitting(false)
        }}
        validationSchema={validationSchema}
      >
        {(props) => {
          const { isSubmitting, handleSubmit } = props
          return (
            <CenteredForm onSubmit={handleSubmit}>
              <MyTextField
                label="Name your workout"
                name="workoutName"
                type="text"
              />
              <MySelect
                options={[
                  {
                    content: 'Running',
                    id: 1,
                  },
                  {
                    content: 'Gym',
                    id: 2,
                  },
                  {
                    content: 'Cycling',
                    id: 3,
                  },
                ]}
                label="Workout type"
                name="workoutType"
                type="select"
              />
              <MyDateField
                label="Start time"
                name="startTime"
                type="datetime-local"
              />
              <MyDateField
                label="End time"
                name="endTime"
                type="datetime-local"
              />
              <MyBigTextField
                label="Workout notes"
                name="description"
                type="text"
              />
              <LoginButton disabled={isSubmitting} type="submit">
                Submit workout
              </LoginButton>
            </CenteredForm>
          )
        }}
      </Formik>
    </FormWrapper>
  )
}

export default WorkoutForm

/*
<MySelect
                options={[
                  {
                    content: 'Motivated',
                    id: 1,
                  },
                  {
                    content: 'Delighted',
                    id: 2,
                  },
                  {
                    content: 'Sad',
                    id: 3,
                  },
                  {
                    content: 'Disappointed',
                    id: 4,
                  },
                  {
                    content: 'Hopeful',
                    id: 5,
                  },
                  {
                    content: 'Happy',
                    id: 6,
                  },
                ]}
                label="Workout mood"
                name="mood"
                type="select"
              />
              */
