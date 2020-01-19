/* eslint-disable consistent-return */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.join('src'), path.join(__dirname, 'node_modules')],
    },
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allFile(filter: { relativeDirectory: { eq: "games" } }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                title
                uid
                itunesLink
                googlePlayLink
              }
              html
            }
          }
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) {
      console.log(errors)

      return Promise.reject(errors)
    }

    data.allFile.edges.forEach(({ node }) => {
      const { uid } = node.childMarkdownRemark.frontmatter

      createPage({
        path: `/games/${uid}/`,
        component: path.resolve('src/templates/game.tsx'),
        context: {
          uid,
        },
      })
    })
  })
}
