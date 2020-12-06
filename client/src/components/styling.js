import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import { makeStyles } from '@material-ui/core/styles'

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[600],
    },
    secondary: {
      main: '#f44336',
    },
  },
})

export const navBarStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  logoutButton: {
    marginLeft: 'auto',
  },
  menu: {},
  menuItem: {
    marginLeft: '0.5rem',
  },
}))

export const homeStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
  },
}))

export const routineFormContStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

export const routineFormStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

export default Theme
