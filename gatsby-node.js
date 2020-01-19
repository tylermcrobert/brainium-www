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

const fetchAppStoreData = id =>
  fetch(`https://itunes.apple.com/lookup?id=${id}`).then(res => res.json())

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

  const gamesData = await Promise.all(
    data.allFile.edges.map(async item => {
      const { appStoreId, uid } = item.node.childMarkdownRemark.frontmatter

      const appStoreData = await fetchAppStoreData(appStoreId)

      return { uid, appStoreData: appStoreData.results[0] }
    })
  )

  gamesData.forEach(({ uid, appStoreData }) => {
    createPage({
      path: `/games/${uid}/`,
      component: path.resolve('src/templates/game.tsx'),
      context: {
        uid,
        appStoreData,
      },
    })
  })
}
