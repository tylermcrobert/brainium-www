/* eslint-disable react/no-danger */
import React from 'react'
import { graphql } from 'gatsby'

interface IProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        uid: string
        itunesLink: string
        googlePlayLink: string
      }
      html: string
    }
  }
}

const Game: React.FC<IProps> = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const { title, itunesLink, googlePlayLink } = frontmatter

  return (
    <div>
      <h1>{title}</h1>
      <a href={itunesLink} target="_blank" rel="noopener noreferrer">
        iOS App Store
      </a>{' '}
      <a href={googlePlayLink} target="_blank" rel="noopener noreferrer">
        Google Play
      </a>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const query = graphql`
  query pageData($uid: String!) {
    markdownRemark(frontmatter: { uid: { eq: $uid } }) {
      frontmatter {
        title
        uid
        itunesLink
        googlePlayLink
      }
      html
    }
  }
`

export default Game
