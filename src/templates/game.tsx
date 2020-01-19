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
  pageContext: any
}

const Game: React.FC<IProps> = ({ data, ...da }) => {
  const { frontmatter, html } = data.markdownRemark
  const { title, itunesLink, googlePlayLink, appStoreId } = frontmatter

  console.log(da.pageContext)

  return (
    <Layout>
      <h1>{title}</h1>
      {/* {appStoreData && <img src={appStoreData.icon_url} alt="icon" />} */}
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
