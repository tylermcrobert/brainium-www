import styled from 'styled-components'

interface IHeadingProps {
  center?: boolean
}

export const PageTitle = styled.h1<IHeadingProps>`
  font-size: ${props => props.theme.remScale[0]};
  text-transform: uppercase;
  text-align: ${props => props.center && 'center'};
  margin: 0 auto;
  color: grey;
  letter-spacing: 0.1em;
`

export const PageIntro = styled.h2<IHeadingProps>`
  font-size: ${props => props.theme.remScale[6]};
  text-align: ${props => props.center && 'center'};
  max-width: 13em;
  margin: 0 auto 1rem;
`

export const Heading = styled.h1<IHeadingProps>``

const DP = { center: true }

PageTitle.defaultProps = DP
PageIntro.defaultProps = DP
Heading.defaultProps = DP
