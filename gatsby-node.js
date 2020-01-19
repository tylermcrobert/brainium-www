/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable consistent-return */

const fetch = require(`node-fetch`)
const path = require('path')
require('dotenv')
const sourceNodes = require('./gatsby-node-helpers/sourceNodes')
const createPages = require('./gatsby-node-helpers/createPages')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.join('src'), path.join(__dirname, 'node_modules')],
    },
  })
}

exports.createPages = createPages
exports.sourceNodes = sourceNodes
