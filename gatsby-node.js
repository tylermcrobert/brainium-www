/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable consistent-return */

const fetch = require(`node-fetch`)
const path = require('path')
require('dotenv')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.join('src'), path.join(__dirname, 'node_modules')],
    },
  })
}

exports.createPages = async function createPages({
  actions: { createPage },
  graphql,
}) {
  const data = await graphql(`
    query {
      allFile(filter: { relativeDirectory: { eq: "games" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                uid
                appStoreId
              }
            }
          }
        }
      }
    }
  `).then(result => result.data)

  data.allFile.edges.forEach(({ node }) => {
    const { uid, appStoreId } = node.childMarkdownRemark.frontmatter

    createPage({
      path: `/games/${uid}/`,
      component: path.resolve('src/templates/game.tsx'),
      context: {
        uid,
      },
    })
  })
}
