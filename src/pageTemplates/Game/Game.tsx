import React from 'react'
import { Layout, AppFrame, Section, Wrap, TextWrap } from 'components'
// eslint-disable-next-line no-unused-vars
import { IProps } from 'templates/game'
import WIREFRAME from './Wireframe'

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
 * Meta
 *
 */

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
      <Wrap>
        <WIREFRAME.ScreenGrid length={urls.length}>
          {urls.map(url => (
            <div>
              <AppFrame key={url}>
                <img src={url} alt="" />
              </AppFrame>
            </div>
          ))}
        </WIREFRAME.ScreenGrid>
      </Wrap>
    </WIREFRAME.ScreenshotWrapper>
  )
}

export default Game
