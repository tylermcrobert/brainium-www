import styled, { css } from 'styled-components'

const BREAK_LG = '(min-width: 40rem)'
const COL_WIDTH = '55rem'
const TEXT_WIDTH = '20rem'

const cols = (invert: boolean) => {
  return invert
    ? css`
        grid-template-columns:
          minmax(0, 1fr)
          /* image */
          minmax(0, calc(${COL_WIDTH} - ${TEXT_WIDTH}))
          /* text */
          minmax(0, calc(${COL_WIDTH} - (${COL_WIDTH} - ${TEXT_WIDTH})))
          minmax(0, 1fr);
      `
    : css`
        grid-template-columns:
          minmax(0, 1fr)
          /* image */
          minmax(0, calc(${COL_WIDTH} - (${COL_WIDTH} - ${TEXT_WIDTH})))
          /* text */
          minmax(0, calc(${COL_WIDTH} - ${TEXT_WIDTH}))
          minmax(0, 1fr);
      `
}

const Featured = styled.div<{ invert?: boolean }>`
  @media ${BREAK_LG} {
    border: 1px solid blue;
    display: grid;
    grid-template-columns: auto minmax(auto, 1200px) auto;
    ${props => cols(!!props.invert)}
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
