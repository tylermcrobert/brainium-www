import React from 'react'
import { Link } from 'gatsby'
import { Section, Wrap } from 'components'
import { SECTIONS } from './constants'
import WIREFRAME from './Wireframe'

const Footer = () => {
  const currentDate = new Date().getFullYear()
  return (
    <WIREFRAME.Footer>
      <Wrap>
        <Section>
          <WIREFRAME.FooterGrid>
            <div>&copy; {currentDate} Brainium Studios</div>
            <div>
              <Items />
            </div>
          </WIREFRAME.FooterGrid>
        </Section>
      </Wrap>
    </WIREFRAME.Footer>
  )
}

const Items: React.FC = () => {
  return (
    <WIREFRAME.Grid>
      {SECTIONS.map(({ name, items }) => (
        <div key={name}>
          <strong>{name}</strong>
          <ul>
            {items.map(({ name: itemName, url, external }) =>
              !external ? (
                <Link to={url} key={url}>
                  <li>{itemName}</li>
                </Link>
              ) : (
                <a
                  href={url}
                  key={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>{itemName}</li>
                </a>
              )
            )}
          </ul>
        </div>
      ))}
    </WIREFRAME.Grid>
  )
}

export default Footer
