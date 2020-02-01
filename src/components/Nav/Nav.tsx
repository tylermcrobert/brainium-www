import React from 'react'
import { Link } from 'gatsby'
import { Wrap } from 'components'
import Styled from './Styled'

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
    <Styled.Nav>
      <Wrap>
        <Styled.NavLayout>
          <Link to="/">
            <strong>Brainium Studios</strong>
          </Link>
          <Styled.Links>
            {navItems.map(({ name, path }) => (
              <li key={path}>
                <Link to={path} key={path}>
                  {name}
                </Link>
              </li>
            ))}
          </Styled.Links>
        </Styled.NavLayout>
      </Wrap>
    </Styled.Nav>
  )
}

export default Nav
