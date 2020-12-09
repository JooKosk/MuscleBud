import { Radio, FormControlLabel } from '@material-ui/core'
import { useField } from 'formik'
import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FormItemContainer = styled(FormContainer)`
  flex: 1;
`

export const CustomTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  //const errorText = meta.error && meta.touched ? meta.error : ''
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

export const MyTextField = styled(CustomTextField)`
  &&& {
    width: 100%;
    font-size: 0.8rem;
    padding: 5px 12px;
    border-radius: 6px;
    flex-grow: 1;
  }
`

export const MyRadioButton = ({ label, ...props }) => {
  const [field] = useField(props)
  return <FormControlLabel {...field} control={<Radio />} label={label} />
}

export const LoginButton = styled.button`
  background-color: #4caf50;
  color: white;
  width: 100%;
  margin: 1rem;
  border-radius: 6px;
  padding: 5px 12px;
  flex-grow: 1;
  &:hover {
    background-color: #009933;
  }
`

export default LoginButton
