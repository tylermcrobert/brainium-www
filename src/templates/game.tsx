/* eslint-disable camelcase */
/* eslint-disable react/no-danger */
import React from 'react'
import { graphql } from 'gatsby'
import { Layout, AppFrame, Section, Wrap, TextWrap } from 'components'
import styled from 'styled-components'

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
      </Wrap>
      <Screenshots urls={screenshotUrls} />
    </Layout>
  )
}

/**
 *
 * Screenshots
 *
 */

interface IScreenshotProps {
  urls: string[]
}

const Screenshots: React.FC<IScreenshotProps> = ({ urls }) => {
  return (
    <ScreenshotWrapper>
      <Wrap>
        <ScreenGrid length={urls.length}>
          {urls.map(url => (
            <div>
              <AppFrame key={url}>
                <img src={url} alt="" />
              </AppFrame>
            </div>
          ))}
        </ScreenGrid>
      </Wrap>
    </ScreenshotWrapper>
  )
}

const ScreenshotWrapper = styled.div`
  padding: 8rem 0;
  overflow-x: scroll;
  background: black;
`

const ScreenGrid = styled.div<{ length: number }>`
  display: grid;
  grid-template-columns: repeat(${props => props.length}, 35%);
  grid-gap: 5%;
  margin: 0 5%;

  > * {
    min-height: 0;
  }
`

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
