import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SpacedText = styled.p`
  margin-left: 1rem;
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

export const CommentUser = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
`
export const CommentText = styled.p`
  margin-block-start: 0;
`
export const DateText = styled.p`
  margin-block-start: 0;
  font-size: 12px;
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
  padding: 6px 10px;
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

export const RemoveButton = styled.button`
  background-color: #353b48;
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

export const PostHeader = styled.p`
  &&& {
    display: block;
    font-size: 1;
    margin-top: 0.8rem;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }
`

export const WorkoutHeader = styled.p`
  &&& {
    display: block;
    font-size: 1.3rem;
    margin-top: 0.8rem;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }
`

export const Header = styled.h1`
  text-align: center;
`

export const Styledh2 = styled.h2`
  text-align: center;
`
