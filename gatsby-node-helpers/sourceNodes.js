/* eslint-disable @typescript-eslint/no-var-requires */
const fetch = require(`node-fetch`)

module.exports = async ({
  actions,
  createNodeId,
  createContentDigest,
  getNodes,
}) => {
  const { createNode } = actions

  const TEST_IDS = [703099994, 384200512]

  const createNodeById = async id => {
    const req = await fetch(`https://itunes.apple.com/lookup?id=${id}`)
    const data = await req.json().then(d => d.results[0])

    const nodeMeta = {
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
    }

    createNode({ ...data, ...nodeMeta })
  }

  await Promise.all(TEST_IDS.map(id => createNodeById(id)))
}
