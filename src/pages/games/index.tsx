import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const GAME_QUERY = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "games" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              uid
            }
          }
        }
      }
    }
  }
`

type GameQuery = {
  allFile: {
    edges: {
      node: {
        childMarkdownRemark: {
          frontmatter: {
            title: string
            uid: string
          }
        }
      }
    }[]
  }
}

const Games = () => {
  const data: GameQuery = useStaticQuery(GAME_QUERY)
  const games = data.allFile.edges.map(
    item => item.node.childMarkdownRemark.frontmatter
  )

  return (
    <div>
      {games.map(({ title, uid }) => (
        <Link to={`/games/${uid}`}>{title}</Link>
      ))}
    </div>
  )
}

export default Games
