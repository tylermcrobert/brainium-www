import styled from 'styled-components'

const BREAK_LG = '(min-width: 40rem)'

const Featured = styled.div<{ invert?: boolean }>`
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 2rem;

  @media ${BREAK_LG} {
    display: grid;
    grid-template-columns: minmax(20rem, 2fr) 3fr;
    align-items: center;
    grid-gap: 2rem;
  }
`

const FeaturedText = styled.div`
  max-width: 20rem;
  justify-self: center;
  grid-column: 1;
  grid-row: 1;
`
const FeaturedImg = styled.div`
  grid-column: 2;
`

const JobEntry = styled.div`
  border-bottom: 1px solid lightgray;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem 0;
  font-size: 0.9rem;
`

export default {
  Featured,
  FeaturedText,
  FeaturedImg,
  JobEntry,
}
