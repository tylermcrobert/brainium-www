import React from 'react'
import { Link } from 'gatsby'
import { SECTIONS } from './constants'

const Footer = () => {
  const currentDate = new Date().getFullYear()
  return (
    <div>
      &copy; {currentDate} Brainium Studios
      <div>
        {SECTIONS.map(({ name, items }) => (
          <div>
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
    </div>
  )
}

export default Footer
