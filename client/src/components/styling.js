import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'
import gray from '@material-ui/core/colors/grey'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

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

const formStyles = (theme) => ({
  root: {
    display: 'flex',
    padding: '1rem',
    borderRadius: '5px',
    alignItems: 'center',
    flexDirection: 'column',
    border: 'solid',
    borderColor: gray[500],
  },
})

export const containerStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}))

export const buttonStyles = makeStyles(() => ({
  root: {
    background: green[600],
    color: 'white',
    width: '100%',
    margin: '1rem',
    height: '2rem',
    '&:hover': {
      backgroundColor: green[700],
      color: '#FFF',
    },
  },
}))
const signUpStyles = (theme) => ({
  root: {
    border: 'solid',
    borderRadius: '5px',
    borderColor: gray[500],
    marginTop: '0.5rem',
  },
})

export const SignUpDiv = withStyles(signUpStyles)(Container)
export const FormContainer = withStyles(formStyles)(Container)

export default Theme
