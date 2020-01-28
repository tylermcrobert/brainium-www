/* eslint-disable camelcase */
/* eslint-disable react/no-danger */
import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import { Section, Wrap, TextWrap } from 'components/UI'

const Game: React.FC<IProps> = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const { averageUserRating, artworkUrl512, screenshotUrls } = data.appStoreData
  const { title, itunesLink, googlePlayLink } = frontmatter

  return (
    <Layout title={title}>
      <Wrap>
        <Section>
          <h1>{title}</h1>
          <div>
            <img src={artworkUrl512} alt={title} width="100px" />
          </div>
        </Section>
        <Section>
          <div>Average rating: {averageUserRating}</div>
          <ul>
            <li>
              <a href={itunesLink} target="_blank" rel="noopener noreferrer">
                iOS App Store
              </a>
            </li>
            {googlePlayLink && (
              <li>
                <a
                  href={googlePlayLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Play
                </a>
              </li>
            )}
          </ul>
        </Section>
        <Section>
          <TextWrap>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </TextWrap>
        </Section>
        <Section>
          {screenshotUrls.map(url => (
            <img src={url} alt="" key={url} width="100px" />
          ))}
        </Section>
      </Wrap>
    </Layout>
  )
}

/**
 * Query
 */

export const query = graphql`
  query pageData($uid: String!, $appStoreId: Int!) {
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
    appStoreData(uid: { eq: $appStoreId }) {
      description
      averageUserRating
      artworkUrl512
      screenshotUrls
    }
  }
`

/**
 * Types
 */

type Frontmatter = {
  title: string
  uid: string
  itunesLink: string
  googlePlayLink: string
  appStoreId: number
}

type AppStoreData = {
  description: string
  averageUserRating: number
  artworkUrl512: string
  screenshotUrls: string[]
}

type MarkdownRemark = {
  frontmatter: Frontmatter
  html: string
}

interface IProps {
  data: {
    markdownRemark: MarkdownRemark
    appStoreData: AppStoreData
  }
}
export default Game
