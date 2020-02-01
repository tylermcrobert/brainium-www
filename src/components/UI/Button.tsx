import styled, { css } from 'styled-components'

interface IProps {
  ghosted?: boolean
  first?: boolean
  last?: boolean
}

const Button = styled.div<IProps>`
  background: ${props => (props.ghosted ? 'transparent' : 'black')};
  color: ${props => (props.ghosted ? 'black' : 'white')};
  border: ${props => (props.ghosted ? '1px solid black' : '')};
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  font-size: 0.8rem;
  border-radius: 0.3rem;

  ${props =>
    props.first &&
    css`
      margin-left: 0;
    `};

  ${props =>
    props.last &&
    css`
      margin-right: 0;
    `};
`

export default Button
