import React from 'react'
import { Formik, Form } from 'formik'
import {
  Button,
  FormLabel,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Grid,
} from '@material-ui/core'
import * as yup from 'yup'
import planService from '../services/plans'
import { Link } from 'react-router-dom'
import {
  MyRadioButton,
  MyTextField,
  RoutinesContainer,
  RoutineFormContainer,
} from './styling'
import { makeStyles } from '@material-ui/core/styles'

const validationSchema = yup.object({
  name: yup.string().required().max(25),
  author: yup.string().required().max(20),
})

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}))

const RoutineForm = ({ plans, setPlans }) => {
  const classes = useStyles()
  const addPlan = async (data) => {
    const workoutPlan = {
      ...data,
    }
    await planService.create(workoutPlan)
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={4}>
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
            {({ values, errors, isSubmitting }) => (
              <Form>
                <RoutineFormContainer>
                  <h2>Post your workout plan here!</h2>
                  <FormLabel component="legend">Workout type:</FormLabel>
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
                  <MyTextField
                    label="Plan name:"
                    placeholder="Abcrusher 2000"
                    name="name"
                    type="input"
                  />
                  <MyTextField
                    label="Plan author:"
                    placeholder="Jeremy"
                    name="author"
                    type="input"
                  />
                  <MyTextField
                    label="Days per week:"
                    placeholder="3"
                    name="workoutDays"
                    type="input"
                  />
                  <MyTextField
                    label="Equipment:"
                    placeholder="Barbells"
                    name="equipment"
                    type="input"
                  />
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
                  <Button disabled={isSubmitting} type="submit">
                    submit
                  </Button>
                </RoutineFormContainer>
              </Form>
            )}
          </Formik>
        </Grid>
        <Grid item xs={8}>
          <TableContainer component={Paper}>
            <h2>Plans</h2>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">
                    <strong>Plan name</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Author</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Workout type</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Days / week</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {plans.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell>
                      <Link to={`/plans/${p.id}`}>{p.name}</Link>
                    </TableCell>
                    <TableCell>{p.author}</TableCell>
                    <TableCell>{p.workoutType}</TableCell>
                    <TableCell>{p.workoutDays}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  )
}

export default RoutineForm
