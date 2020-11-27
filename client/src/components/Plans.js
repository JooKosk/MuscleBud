import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Abcrusher 5000',
    author: 'Arnold',
    workoutType: 'Full',
    equipment: ['Barbells', 'Tightrope'],
    workoutDays: 5,
    description: 'Five day split adnandadnaawdnwadnwadnwadwnadwandawdwa',
    id: 1,
  },
  {
    name: 'Abcrusher 7000',
    author: 'Mike',
    workoutType: 'Upper',
    equipment: ['Shorts', 'Bar'],
    workoutDays: 3,
    description: 'Three day split dfgdfdfdfdfdfdfdfdfdfdfdfdfdfdfd',
    id: 2,
  },
]

const Plans = () => {
  return (
    <div>
      <h2>Plans</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {plans.map((p) => (
              <TableRow key={p.id}>
                <TableCell>
                  <Link to={`/plans/${p.id}`}>{p.name}</Link>
                </TableCell>
                <TableCell>{p.author}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Plans
