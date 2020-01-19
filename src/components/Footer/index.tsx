import React from 'react'

const Footer = () => {
  const currentDate = new Date().getFullYear()
  return <div>&copy; {currentDate} Brainium Studios</div>
}

export default Footer
