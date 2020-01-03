import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <strong>Brainium Studios</strong>
      </Link>
      <Link to="/about">about</Link>
    </nav>
  )
}

export default Nav
