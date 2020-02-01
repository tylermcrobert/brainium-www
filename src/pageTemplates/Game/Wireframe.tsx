import styled from 'styled-components'

const ScreenshotWrapper = styled.div`
  padding: 8rem 0;
  overflow-x: scroll;
  background: lightgrey;
`

const ScreenGrid = styled.div<{ length: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.length}, 35%);
  grid-gap: 5%;
  margin: 0 5%;

  > * {
    min-height: 0;
  }
`

export default {
  ScreenGrid,
  ScreenshotWrapper,
}
