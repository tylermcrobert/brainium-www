import styled from 'styled-components'

export const Wrap = styled.div`
  width: 100%;
  max-width: 55rem;
  margin: 0 auto;
  padding: 0 2rem;
`

export const TextWrap = styled.div<{ center?: boolean }>`
  width: 100%;
  max-width: 30rem;
  margin: ${props => (props.center ? '0 auto' : '')};
`
