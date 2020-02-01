import React from 'react'
import { Link } from 'gatsby'
import { Section, Wrap } from 'components'
import { SECTIONS } from './constants'

const Footer = () => {
  const currentDate = new Date().getFullYear()
  return (
    <Wrap>
      <Section>
        &copy; {currentDate} Brainium Studios
        <div>
          {SECTIONS.map(({ name, items }) => (
            <div key={name}>
              <strong>{name}</strong>
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
            </div>
          ))}
        </div>
      </Section>
    </Wrap>
  )
}

export default Footer
