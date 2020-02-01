import React, { useState } from 'react'
import Layout from 'components/Layout'
import { Wrap, Section } from 'components/UI'
import useCareers from 'hooks/useCareers'
import useGames from 'hooks/useGames'
import { Link } from 'gatsby'

const Index: React.FC = () => {
  return (
    <Layout title={null}>
      <Wrap>
        <Intro />
        <Featured />
        <Careers />
      </Wrap>
    </Layout>
  )
}
const Intro: React.FC = () => {
  return (
    <Section>
      <h1>Brainium studios is lorem ipsum dolor</h1>
      <p>lorem ipsum dolor sit amet consecutor</p>
    </Section>
  )
}

/**
 * Games
 */

const GAMES = ['solitaire', 'ilu']

const Featured: React.FC = () => {
  const [index, setIndex] = useState(0)

  const { length } = GAMES
  const nextIndex = (index + 1) % length
  const prevIndex = (index - 1 + length) % length

  const games = useGames()
  const { title } = games.filter(game => game.uid === GAMES[index])[0]

  return (
    <div>
      <h5>Featured games</h5>
      <h2>{title}</h2>
      <button type="button" onClick={() => setIndex(prevIndex)}>
        Prev
      </button>
      <button type="button" onClick={() => setIndex(nextIndex)}>
        Next
      </button>
    </div>
  )
}

/**
 * Careers
 */

const Careers: React.FC = () => {
  const careerData = useCareers()
  return (
    <Section>
      <h2>We&apos;re Hiring</h2>
      <p>Sed tortor purus, venenatis vitae euismod eu, placerat sed lacus.</p>
      {careerData.map(({ title, city, url }) => (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div>
            {title} - {city}
          </div>
        </a>
      ))}
      <Link to="/careers">See all careers</Link>
    </Section>
  )
}

export default Index
