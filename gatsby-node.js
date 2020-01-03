// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.join("src"), path.join(__dirname, "node_modules")],
    },
  })
}
