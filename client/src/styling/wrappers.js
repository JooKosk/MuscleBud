import styled from 'styled-components'

export const CenteredWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const LoginItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
  background-color: #dcdde1;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  bottom: 0;
  padding: 6px;
  font-size: 14px;
  flex-shrink: 0;
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

export const CommentWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size 14px;
  position: relative;
  margin: 0;
  `

export const CommentBody = styled.div`
  font-size 14px;
  box-sizing: border-box;
`

export const CommentCount = styled.div`
  margin-left: 5px;
`

export const WorkoutPost = styled.div`
  box-sizing: border-box;
  border: solid 1px #a6a6a6;
  border-radius: 8px;
  padding-left: 12px;
  background-color: #ffffff;
  width: 50%;
  color: black;
  margin: 15px;
  overflow-wrap: break-word;
`
export const PostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  flex: 0.5 0 auto;
  align-items: center;
`

export const HomeWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
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
    word-break: break-word;
  }
`

export const PostInfo = styled.div`
  display: flex;
  font-size: 14px;
  box-sizing: border-box;
`
