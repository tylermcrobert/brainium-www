import { createGlobalStyle, css } from 'styled-components'

const GLOBAL = css`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const GlobalStyle = createGlobalStyle`
  ${GLOBAL}
`

export default GlobalStyle
