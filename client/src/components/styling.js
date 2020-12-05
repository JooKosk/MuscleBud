import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const StyledButton = styled(Button)`
  && {
    background-color: #6772e5;
    color: #fff;
    margin: 0.5rem 1rem;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 4px 7px;
    &:hover {
      background-color: #5469d4;
    }
  }
`
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SignUpButton = styled(StyledButton)`
  && {
    margin-left: 0.5rem;
  }
`
