import { graphql, useStaticQuery } from 'gatsby'

export const query = graphql`
  {
    allJazzHrJob(filter: { status: { eq: "Open" } }) {
      edges {
        node {
          title
          department
          city
          state
          description
          type
          board_code
        }
      }
    }
  }
`

type Data = {
  allJazzHrJob: {
    edges: {
      node: {
        title: string
        department: string
        city: string
        state: string
        description: string
        type: string
        board_code: string
        url: string
      }
    }[]
  }
}

const useCareers = () => {
  const queryRes: Data = useStaticQuery(query)
  return queryRes.allJazzHrJob.edges.map(({ node }) => ({
    ...node,
    url: `https://brainiumstudios.applytojob.com/apply/${node.board_code}`,
  }))
}

export default useCareers
