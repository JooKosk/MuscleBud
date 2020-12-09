import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'
import gray from '@material-ui/core/colors/grey'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import {
  Container,
  Button,
  TextField,
  Radio,
  FormControlLabel,
  RadioGroup,
} from '@material-ui/core'
import { useField } from 'formik'
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

export const MyTextField = ({ placeholder, type, label, ...props }) => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ''
  return (
    <TextField
      placeholder={placeholder}
      label={label}
      type={type}
      {...field}
      helperText={errorText}
      error={!!errorText}
      style={{
        margin: '0.5rem',
      }}
      InputLabelProps={{
        shrink: true,
      }}
    />
  )
}

export const MyRadioButton = ({ label, ...props }) => {
  const [field] = useField(props)
  return <FormControlLabel {...field} control={<Radio />} label={label} />
}

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

const containerStyles = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
})

const loginButtonStyles = (theme) => ({
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
})

const blueButtonStyles = (theme) => ({
  root: {
    background: blue[600],
    color: 'white',
    margin: '1rem',
    width: '100%',
    '&:hover': {
      backgroundColor: blue[700],
      color: '#FFF',
    },
  },
})
const signUpStyles = (theme) => ({
  root: {
    border: 'solid',
    borderRadius: '5px',
    borderColor: gray[500],
    marginTop: '0.5rem',
  },
})

const radioGroupStyles = (theme) => ({
  root: {
    width: '100%',
  },
})

const routineStyles = (theme) => ({
  root: {
    display: 'flex',
    padding: '1rem',
  },
})

const routineFormStyles = (theme) => ({
  root: {
    display: 'flex',
    padding: '1rem',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
})

export const OptionsDiv = withStyles(signUpStyles)(Container)
export const FormContainer = withStyles(formStyles)(Container)
export const RoutineFormContainer = withStyles(routineFormStyles)(Container)
export const RoutinesContainer = withStyles(routineStyles)(Container)
export const CenteredContainer = withStyles(containerStyles)(Container)
export const LoginButton = withStyles(loginButtonStyles)(Button)
export const BlueButton = withStyles(blueButtonStyles)(Button)
export const StyledRadioGroup = withStyles(radioGroupStyles)(RadioGroup)

export default Theme
