import React, { useState } from 'react'
import { Layout, Wrap, Section } from 'components'
import useCareers from 'hooks/useCareers'
import useGames from 'hooks/useGames'
import { Link } from 'gatsby'
import WIREFRAME from './Wireframe'

const Index: React.FC = () => {
  return (
    <Layout title={null}>
      <Intro />
      <Featured />
      <Careers />
    </Layout>
  )
}
const Intro: React.FC = () => {
  return (
    <Section>
      <Wrap>
        <h1>Brainium studios is lorem ipsum dolor</h1>
        <p>lorem ipsum dolor sit amet consecutor</p>
      </Wrap>
    </Section>
  )
}

/**
 * Games
 */

const GAMES = ['solitaire', 'sudoku', 'spider-solitaire', 'freecell']

const Featured: React.FC = () => {
  const [index, setIndex] = useState(0)

  const { length } = GAMES
  const nextIndex = (index + 1) % length
  const prevIndex = (index - 1 + length) % length

  const games = useGames()
  const gameData = games.filter(game => game.uid === GAMES[index])[0]
  const { title, uid, summary } = gameData

  return (
    <>
      <WIREFRAME.Featured>
        <img src="https://via.placeholder.com/960x680" width="100%" alt="" />
        <div>
          <h5>Featured games</h5>
          <h2>{title}</h2>
          {index + 1} / {length}
          <p>{summary}</p>
          <div>
            <Link to={`/games/${uid}`}>Learn More</Link>{' '}
            <Link to="/games/">All Games</Link>
          </div>
          <div>
            <button type="button" onClick={() => setIndex(prevIndex)}>
              Prev
            </button>
            <button type="button" onClick={() => setIndex(nextIndex)}>
              Next
            </button>
          </div>
        </div>
      </WIREFRAME.Featured>
    </>
  )
}

/**
 * Careers
 */

const Careers: React.FC = () => {
  const careerData = useCareers()
  return (
    <Section>
      <WIREFRAME.Featured invert>
        <img src="https://via.placeholder.com/960x680" width="100%" alt="" />
        <div>
          <h2>We&apos;re Hiring</h2>
          <p>
            Sed tortor purus, venenatis vitae euismod eu, placerat sed lacus.
          </p>
          {careerData.map(({ title, city, url }) => (
            <a href={url} target="_blank" rel="noopener noreferrer">
              <div>
                {title} - {city}
              </div>
            </a>
          ))}
          <Link to="/careers">See all careers</Link>
        </div>
      </WIREFRAME.Featured>
    </Section>
  )
}

export default Index
