import styled from 'styled-components'

const BREAK_LG = '(min-width: 40rem)'
const COL_WIDTH = '55rem'

const Featured = styled.div<{ invert?: boolean }>`
  @media ${BREAK_LG} {
    border: 1px solid blue;
    display: grid;
    grid-template-columns: auto minmax(auto, 1200px) auto;
    grid-template-columns:
      minmax(0, 1fr)
      /* image */
      minmax(0, calc(${COL_WIDTH} * ${props => (props.invert ? 2 : 1) / 3}))
      /* text */
      minmax(0, calc(${COL_WIDTH} * ${props => (props.invert ? 1 : 2) / 3}))
      minmax(0, 1fr);
    align-items: center;

    > * {
      :nth-child(1) {
        grid-column: ${props => (props.invert ? 1 : 3)} / span 2;
        grid-row: 1;
      }
      :nth-child(2) {
        grid-column: ${props => (props.invert ? 3 : 2)};
        padding: 2rem;
      }
    }
  }
`

export default {
  Featured,
}
