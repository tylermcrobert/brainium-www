import React from 'react'
import { Link } from 'gatsby'

const navItems: { name: string; path: string }[] = [
  {
    name: 'Games',
    path: '/games',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Careers',
    path: '/careers',
  },
  {
    name: 'Support',
    path: '/support',
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
