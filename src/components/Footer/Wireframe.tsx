import styled from 'styled-components'

const Footer = styled.footer`
  padding: 1rem 0;
  background: lightgrey;
  line-height: 1.5;
  font-size: ${props => props.theme.remScale[1]};

  strong {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${props => props.theme.margins.standard};
`

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export default {
  Footer,
  FooterGrid,
  Grid,
}
