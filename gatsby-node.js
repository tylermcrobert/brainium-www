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

  data.allMarkdownRemark.edges.forEach(item => {
    const { uid, appStoreId } = item.node.frontmatter

    if (appStoreId) {
      createPage({
        path: `/games/${uid}/`,
        component: path.resolve('src/templates/game.tsx'),
        context: {
          uid,
          appStoreId,
        },
      })
    }
  })
}

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  createNodeId,
  createContentDigest,
}) => {
  if (
    node.internal.type === 'MarkdownRemark' &&
    node.frontmatter &&
    !!node.frontmatter.appStoreId
  ) {
    const id = node.frontmatter.appStoreId
    const req = await fetch(`https://itunes.apple.com/lookup?id=${id}`)
    const data = await req.json().then(d => d.results[0])

    await createNode({
      ...data,
      ...{
        id: createNodeId(`my-data-${id}`),
        uid: id,
        data: JSON.stringify(data),
        parent: null,
        children: [],
        internal: {
          type: `appStoreData`,
          mediaType: `text/html`,
          contentDigest: createContentDigest(data),
        },
      },
    })
  }
}
