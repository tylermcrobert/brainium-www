import React from "react"

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      Brainium Studios
      <main>{children}</main>
    </div>
  )
}

export default Layout
