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
      }
    }[]
  }
}

const useCareers = () => {
  const queryRes: Data = useStaticQuery(query)
  return queryRes.allJazzHrJob.edges.map(edge => edge.node)
}

export default useCareers
