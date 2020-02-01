import React from 'react'
import { graphql } from 'gatsby'
import { GameTemplate } from 'pageTemplates'

const Game = ({ data }: IProps) => <GameTemplate data={data} />

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

export interface IProps {
  data: {
    markdownRemark: MarkdownRemark
    appStoreData: AppStoreData
  }
}

export default Game
