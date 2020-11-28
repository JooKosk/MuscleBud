import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import TableHead from '@material-ui/core/TableHead'
import Paper from '@material-ui/core/Paper'
import { useParams } from 'react-router-dom'

const PlanInfo = ({ plans }) => {
  const id = useParams().id
  const plan = plans.find((p) => p.id === id)

  if (!plan) {
    return null
  }
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Plan name</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Workout type</TableCell>
            <TableCell>Days/week</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{plan.name}</TableCell>
            <TableCell>{plan.author}</TableCell>
            <TableCell>{plan.workoutType}</TableCell>
            <TableCell>{plan.workoutDays}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PlanInfo
