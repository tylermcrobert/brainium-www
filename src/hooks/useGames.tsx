import { useStaticQuery, graphql } from 'gatsby'

const GAME_QUERY = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "games" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              uid
              summary
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
            summary?: string
          }
        }
      }
    }[]
  }
}

const useGames = () => {
  const data: GameQuery = useStaticQuery(GAME_QUERY)
  const games = data.allFile.edges.map(
    item => item.node.childMarkdownRemark.frontmatter
  )

  return games
}

export default useGames
