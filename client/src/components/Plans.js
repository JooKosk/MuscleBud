import React from 'react'
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { CenteredContainer } from '../styling/wrappers'

const Plans = ({ plans }) => {
  return (
    <div>
      <h2>Plans</h2>
      <TableContainer component={Paper}>
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
    </div>
  )
}

export default Plans
