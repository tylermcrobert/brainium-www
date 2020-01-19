/* eslint-disable camelcase */
/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react'
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
        appStoreId: number
      }
      html: string
    }
  }
  pageContext: {
    appStoreData: {
      screenshotUrls: string[]
      averageUserRating: number
    }
  }
}

const Game: React.FC<IProps> = ({ data, pageContext }) => {
  const { frontmatter, html } = data.markdownRemark
  const { title, itunesLink, googlePlayLink } = frontmatter
  const { averageUserRating, screenshotUrls } = pageContext.appStoreData

  return (
    <Layout>
      <h1>{title}</h1>
      {screenshotUrls.map(url => (
        <img src={url} alt="" key={url} width="100px" />
      ))}
      <div>Average rating: {averageUserRating}</div>
      <ul>
        <li>
          <a href={itunesLink} target="_blank" rel="noopener noreferrer">
            iOS App Store
          </a>
        </li>
        {googlePlayLink && (
          <li>
            <a href={googlePlayLink} target="_blank" rel="noopener noreferrer">
              Google Play
            </a>
          </li>
        )}
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
        appStoreId
      }
      html
    }
  }
`

export default Game
