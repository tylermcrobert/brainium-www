/* eslint-disable camelcase */
import React from 'react'
import Layout from 'components/Layout'
import { Wrap, Section } from 'components/UI'
import { useStaticQuery, graphql } from 'gatsby'

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

const Careers = () => {
  return (
    <Layout title="Careers">
      <Wrap>
        <Section>
          <h1>Careers</h1>
          <p>Work Here!</p>
          <List />
        </Section>
      </Wrap>
    </Layout>
  )
}

const List = () => {
  const queryRes: Data = useStaticQuery(query)
  const data = queryRes.allJazzHrJob.edges.map(item => item.node)
  return (
    <>
      {data.map(({ city, title, board_code: code, state }) => (
        <>
          <a
            href={`https://brainiumstudios.applytojob.com/apply/${code}`}
            target="blank"
            rel="noopener noreferrer"
          >
            <div>
              <strong>{title}</strong>
            </div>
            {city}, {state}
          </a>
          <hr />
        </>
      ))}
    </>
  )
}

export default Careers
