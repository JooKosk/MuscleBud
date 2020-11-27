import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import TableHead from '@material-ui/core/TableHead'
import Paper from '@material-ui/core/Paper'
import { useParams } from 'react-router-dom'

const plans = [
  {
    name: 'Abcrusher 5000',
    author: 'Arnold',
    workoutType: 'Full body',
    equipment: ['Barbells', 'Tightrope'],
    workoutDays: 5,
    description: 'Five day split adnandadnaawdnwadnwadnwadwnadwandawdwa',
    id: 1,
  },
  {
    name: 'Abcrusher 7000',
    author: 'Mike',
    workoutType: 'Upper body',
    equipment: ['Shorts', 'Bar'],
    workoutDays: 3,
    description: 'Three day split dfgdfdfdfdfdfdfdfdfdfdfdfdfdfdfd',
    id: 2,
  },
]

const PlanInfo = () => {
  const id = useParams().id
  const plan = plans.find((p) => p.id === Number(id))

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
