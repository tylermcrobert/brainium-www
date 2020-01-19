import React from 'react'
import { Link } from 'gatsby'

const navItems: { name: string; path: string }[] = [
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Games',
    path: '/games',
  },
]

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <strong>Brainium Studios</strong>
      </Link>
      <ul>
        {navItems.map(({ name, path }) => (
          <li key={path}>
            <Link to={path} key={path}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
