import { useField, Form } from 'formik'
import styled from 'styled-components'

export const CenteredForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const RegForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 0;
  flex-basis: 0;
  max-width: 203px;
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const FlexForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 1rem;
`

export const ErrorMessageDiv = styled.div`
  color: red;
  align-self: flex-start;
  margin-bottom 0.3rem;
  flex-grow: 0;
  word-wrap: break-word;
`
export const SpacedLabel = styled.label`
  &&& {
    align-self: flex-start;
    margin: 0.4rem 0;
  }
`

export const CustomTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  //const errorText = meta.error && meta.touched ? meta.error : ''
  return (
    <>
      <SpacedLabel htmlFor={props.id || props.name}>{label}</SpacedLabel>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessageDiv className="error">{meta.error}</ErrorMessageDiv>
      ) : null}
    </>
  )
}

const CustomSelect = ({ label, options, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <SpacedLabel htmlFor={props.id || props.name}>{label}</SpacedLabel>
      <select name={props.name} {...field} {...props}>
        {options.map((o) => (
          <option key={o.id} value={o.content}>
            {o.content}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <ErrorMessageDiv className="error">{meta.error}</ErrorMessageDiv>
      ) : null}
    </>
  )
}
export const CustomTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  //const errorText = meta.error && meta.touched ? meta.error : ''
  return (
    <>
      <SpacedLabel htmlFor={props.id || props.name}>{label}</SpacedLabel>
      <textarea className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <ErrorMessageDiv className="error">{meta.error}</ErrorMessageDiv>
      ) : null}
    </>
  )
}

export const MyTextField = styled(CustomTextField)`
  &&& {
    padding: 5px 12px;
    border-radius: 6px;
    border-width: 1px;
    min-width: 0;
    box-sizing: border-box;
    width: 100%;
  }
`

export const MyBigTextField = styled(CustomTextArea)`
  &&& {
    padding: 5px 12px;
    border-radius: 6px;
    border-width: 1px;
    flex-grow: 1;
    min-width: 0;
    box-sizing: border-box;
    width: 100%;
    height: 5rem;
    resize: none !important;
  }
`

export const MyDateField = styled(MyTextField)`
  &&& {
    width: 100%;
  }
`

export const LoginTextField = styled(MyTextField)`
  width: 100%;
`

export const MySelect = styled(CustomSelect)`
  &&& {
    font-size: 0.8rem;
    padding: 5px 12px;
    border-radius: 6px;
    border-width: 1px;
    flex-grow: 1;
    min-width: 0;
    width: 100%;
    background: #ffff;
  }
`
