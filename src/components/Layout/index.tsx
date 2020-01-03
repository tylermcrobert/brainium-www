import React from "react"
import Nav from "components/Nav"
import Footer from "components/Footer"

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Nav />
      <hr />
      <main>{children}</main>
      <hr />
      <Footer />
    </div>
  )
}

export default Layout
