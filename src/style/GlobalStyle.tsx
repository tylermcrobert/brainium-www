import { createGlobalStyle, css } from 'styled-components'
import reset from 'styled-reset'

const GLOBAL = css`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;

    margin: 0;
    padding: 0;
  }

  html,
  body {
    font-size: 22px;
    font-family: helvetica;
  }

  p {
    color: #666;
    line-height: 1.5;
  }

  a {
    color: black;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    margin-bottom: 1rem;
  }
`

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${GLOBAL}
`

export default GlobalStyle
