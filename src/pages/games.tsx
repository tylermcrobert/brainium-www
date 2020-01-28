import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from 'components/Layout'
import { Wrap, Section, TextWrap } from 'components/UI'

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
    <Layout title="Games">
      <Wrap>
        <Section>
          <h1>Games</h1>
          <ul>
            {games.map(({ title, uid }) => (
              <li>
                <h2>
                  <Link to={`/games/${uid}`}>{title}</Link>
                </h2>
              </li>
            ))}
          </ul>
        </Section>
      </Wrap>
    </Layout>
  )
}

export default Games
