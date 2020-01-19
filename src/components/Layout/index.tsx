import React from 'react'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import Helmet from 'react-helmet'
import GlobalStyle from 'style/GlobalStyle'

interface IProps {
  title: string | null
  description?: string
}

const Layout: React.FC<IProps> = ({ children, title }) => {
  return (
    <div>
      <Head title={title} />
      <GlobalStyle />
      <Nav />
      <hr />
      <main>{children}</main>
      <hr />
      <Footer />
    </div>
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
