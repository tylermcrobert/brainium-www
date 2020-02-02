import styled from 'styled-components'

const GamesWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${props => props.theme.margins.standard};
`

const Game = styled.div`
  background: #ddd;
  width: 100%;
  list-style: none;
  padding-top: 100%;
  border-radius: 1.5rem;

  h2 {
    font-size: 1rem;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
  }
`

export default {
  GamesWrapper,
  Game,
}
