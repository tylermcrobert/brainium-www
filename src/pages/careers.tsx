/* eslint-disable camelcase */
import React from 'react'
import Layout from 'components/Layout'
import { Wrap, Section } from 'components/UI'
import useCareers from 'hooks/useCareers'

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
  const careerData = useCareers()

  return (
    <>
      {careerData.map(({ city, title, board_code: code, state }) => (
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
