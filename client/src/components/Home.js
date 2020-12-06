import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
} from '@material-ui/core'
import { homeStyles } from './styling'

const Home = ({ workouts }) => {
  const classes = homeStyles()
  return (
    <div>
      <h1 className={classes.root}>Your MuscleBud feed</h1>
      {workouts.map((w) => (
        <TableContainer
          style={{ margin: 20, border: 'solid' }}
          key={w.id}
          component={Paper}
        >
          <div>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Posted by {w.user.name}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{w.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{w.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Posted: {new Date(w.date).toDateString()}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </TableContainer>
      ))}
    </div>
  )
}

export default Home
