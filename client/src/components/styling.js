import { useField, Form } from 'formik'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html {
  font-family: 'Lato', sans-serif;
  min-height: 100%;
}
body {
  margin: 0;
  background-color: #f5f6fa;
  min-height: 100%;
}
`
// Containers, Forms

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const StyledP = styled.p`
  margin-left: 1rem;
`
export const CenteredForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FlexForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 1rem;
`
export const CenteredWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LoginItemWrapper = styled(FormWrapper)`
border: solid 3px;
  border-radius 5px;
  box-sizing: border-box;
  padding: 20px;
  background-color: #f5f6fa;
  border-color: #f5f6fa;
`

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2f3640;
  height: 70px;
  box-sizing: border-box;
  padding: 6px;
  top: 0;
`

export const FooterWrapper = styled.div`
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  bottom: 0;
  position: fixed;
  padding: 6px;
  font-size: 14px;
`

export const NavButton = styled.button`
  background-color: #2f3640;
  color: white;
  margin: 0.6rem;
  border-radius: 8px;
  padding: 6px 12px;
  border: 2px solid #fff;
  cursor: pointer;
  &:hover {
    background-color: #353b48;
  }
`
export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`

export const DropDownMenu = styled.div`
  display: inline-block;
  &:hover {
    background-color: #2f3640;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`
export const DropDownLink = styled(Link)`
  color: black;
  padding: 10px 12px;
  font-size: 14px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #f1f1f1;
  }
`
export const ErrorMessageDiv = styled.div`
  color: red;
  align-self: flex-start;
  margin-bottom 0.3rem;
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

export const MyTextField = styled(CustomTextField)`
  &&& {
    padding: 5px 12px;
    border-radius: 6px;
    border-width: 1px;
    flex-grow: 1;
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

export const LoginButton = styled.button`
  background-color: #4caf50;
  color: white;
  width: 100%;
  margin: 0.6rem 0;
  border-radius: 6px;
  padding: 8px 12px;
  border: 0px solid #fff;
  font-size: 14px;
  box-sizing: border-box;
  &:hover {
    background-color: #009933;
  }
`
export const BlueButton = styled.button`
  background-color: #487eb0;
  color: white;
  border-radius: 8px;
  padding: 8px 14px;
  border: 3px solid #fff;
  font-size: 14px;
  box-sizing: border-box;
  &:hover {
    background-color: #40739e;
  }
`
export const LikeButton = styled.button`
  background-color: #487eb0;
  color: white;
  border-radius: 8px;
  padding: 4px 10px;
  border: 3px solid #fff;
  font-size: 14px;
  box-sizing: border-box;
  &:hover {
    background-color: #40739e;
  }
`

export const SubmitButton = styled(LoginButton)`
  margin-left: 0;
  margin-top: 0.6rem;
`
export const WorkoutPost = styled.div`
  box-sizing: border-box;
  border: solid 1px #a6a6a6;
  border-radius: 5px;
  padding-left: 12px;
  background-color: #ffffff;
  width: 700px;
  color: black;
  margin: 15px;
  overflow-wrap: break-word;
`
export const WorkoutHeader = styled.p`
  &&& {
    display: block;
    font-size: 1.2em;
    margin-top: 0.8rem;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }
`
export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const Header = styled.h1`
  text-align: center;
`
export const Styledh2 = styled.h2`
  text-align: center;
`
export const ErrorWrapper = styled.div`
  &&& {
    background-color: #ffffff;
    border: solid 1px;
    color: #c23616;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 14px;
    margin-bottom: 10px;
  }
`
export const SuccessWrapper = styled.div`
  &&& {
    background: #ffffff;
    color: #29a329;
    border: solid 1px;
    border-style: solid 1px;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 8px 14px;
    margin-bottom: 10px;
    width: 100%;
  }
`
export default LoginButton
