/* eslint-disable react/no-danger */
import React from 'react'
import {
  Layout,
  AppFrame,
  Section,
  Wrap,
  TextWrap,
  PageIntro,
  PageTitle,
} from 'components'
// eslint-disable-next-line no-unused-vars
import { IProps } from 'templates/game'
import WIREFRAME from './Wireframe'

const Game: React.FC<IProps> = ({ data }) => {
  const {
    markdownRemark: { frontmatter, html },
    appStoreData: { averageUserRating, screenshotUrls },
  } = data

  const { title, itunesLink, googlePlayLink } = frontmatter

  return (
    <Layout title={title}>
      <Intro title={title} />
      <Meta
        itunesLink={itunesLink}
        googlePlayLink={googlePlayLink}
        averageUserRating={averageUserRating}
      />
      <Body html={html} />
      <Screenshots urls={screenshotUrls} />
    </Layout>
  )
}

/**
 *
 * Intro
 *
 */

interface IIntroProps {
  title: string
}

const Intro: React.FC<IIntroProps> = ({ title }) => {
  return (
    <>
      <Section>
        <Wrap>
          <TextWrap center>
            <PageTitle>{title}</PageTitle>
            <PageIntro>The classsic card game at its absolute best</PageIntro>
            <p>
              Duis tincidunt arcu in leo fringilla, ac consequat diam venenatis.
              Fusce lacinia est est, eget eleifend sem venenatis eu. Curabitur
              quis quam nulla.
            </p>
          </TextWrap>
        </Wrap>
      </Section>
      <Section>
        <Wrap>
          <img src="https://via.placeholder.com/1440x800" alt="" width="100%" />
        </Wrap>
      </Section>
    </>
  )
}

/**
 *
 * Meta
 *
 */

interface IMetaProps {
  averageUserRating: number
  itunesLink: string
  googlePlayLink: string
}

const Meta: React.FC<IMetaProps> = ({
  averageUserRating,
  itunesLink,
  googlePlayLink,
}) => {
  return (
    <Section>
      <Wrap>
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
      </Wrap>
    </Section>
  )
}

/**
 *
 * Body
 *
 */

interface IBodyProps {
  html: string
}

const Body: React.FC<IBodyProps> = ({ html }) => {
  return (
    <Wrap>
      <Section>
        <TextWrap center>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </TextWrap>
      </Section>
    </Wrap>
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
    <WIREFRAME.ScreenshotWrapper>
      <WIREFRAME.ScreenGrid length={urls.length}>
        {urls.map(url => (
          <div>
            <AppFrame key={url}>
              <img src={url} alt="" />
            </AppFrame>
          </div>
        ))}
      </WIREFRAME.ScreenGrid>
    </WIREFRAME.ScreenshotWrapper>
  )
}

export default Game
