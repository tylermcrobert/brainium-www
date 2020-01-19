/* eslint-disable react/no-danger */
import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'

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
    <Layout>
      <h1>{title}</h1>
      <ul>
        <li>
          <a href={itunesLink} target="_blank" rel="noopener noreferrer">
            iOS App Store
          </a>{' '}
        </li>
        <li>
          <a href={googlePlayLink} target="_blank" rel="noopener noreferrer">
            Google Play
          </a>
        </li>
      </ul>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
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
