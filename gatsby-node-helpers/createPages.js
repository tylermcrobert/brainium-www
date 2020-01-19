/* eslint-disable @typescript-eslint/no-var-requires */
const fetch = require(`node-fetch`)
const path = require('path')

const fetchAppStoreData = id =>
  fetch(`https://itunes.apple.com/lookup?id=${id}`).then(res => res.json())

module.exports = async function createPages({
  actions: { createPage },
  graphql,
}) {
  const data = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              uid
              appStoreId
            }
          }
        }
      }
    }
  `).then(result => result.data)

  const gamesData = await Promise.all(
    data.allMarkdownRemark.edges.map(async item => {
      const { appStoreId, uid } = item.node.frontmatter

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
