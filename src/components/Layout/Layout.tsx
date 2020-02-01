import React from 'react'
import Helmet from 'react-helmet'
import GlobalStyle from 'style/GlobalStyle'
import theme from 'style/theme'
import { ThemeProvider } from 'styled-components'
import { Nav, Footer } from 'components'
import Styled from './Styled'

interface IProps {
  title: string | null
  description?: string
}

const Layout: React.FC<IProps> = ({ children, title }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head title={title} />
        <GlobalStyle />
        <Nav />
        <Styled.Main>{children}</Styled.Main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

interface IHeadProps {
  title: string | null
}

const Head: React.FC<IHeadProps> = ({ title }) => {
  return (
    <Helmet>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>
        {title ? `${title} | Brainium Studios` : 'Brainium Studios'}
      </title>
    </Helmet>
  )
}

export default Layout
