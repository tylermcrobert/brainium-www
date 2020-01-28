import { createGlobalStyle, css } from 'styled-components'
import reset from 'styled-reset'
import { log } from 'util'

const GLOBAL = css`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    font-size: 22px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  p {
    color: #666;
    line-height: 1.5;
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

const STYLED = css`
  @font-face {
    font-family: 'Whyte';
    src: url('fonts/WhyteTrial-Book.otf');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Whyte Inktrap';
    src: url('fonts/WhyteInktrapTrial-Medium.otf');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Whyte';
    src: url('fonts/WhyteTrial-Medium.otf');
    font-weight: 500;
  }

  font-family: 'Whyte';
  line-height: 1.5;
  color: ${props => props.theme.colors.text};
  max-width: 40rem;
  letter-spacing: 0.02em;
  font-weight: 300;
  font-size: 18px;

  a {
    color: ${props => props.theme.colors.brand.secondary};
    text-decoration: none;
    font-weight: 500;
  }

  p,
  li {
    color: ${props => props.theme.colors.text};
    margin-bottom: 1rem;
  }

  li {
    padding-left: 1.5rem;
    position: relative;

    &:before {
      position: absolute;
      left: 0.5em;
      content: '•';
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.colors.brand.secondary};
    font-weight: 500;
    margin-bottom: 0.5em;
  }

  h1 {
    font-family: 'Whyte Inktrap';
    color: ${props => props.theme.colors.brand.main};
    font-size: 3em;
  }

  h3 {
    margin-top: 3rem;
    font-size: 1.5em;
  }

  h4 {
    font-size: 1.25em;
    color: ${props => props.theme.colors.brand.main};
  }

  h5 {
    margin-top: 1rem;
    font-size: 1.25em;
  }
`

const GlobalStyle = createGlobalStyle`
  ${GLOBAL}

  .styled{
    ${reset}
    ${STYLED}
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
`

export default GlobalStyle
