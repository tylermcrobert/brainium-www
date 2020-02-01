import React from 'react'
import { Link } from 'gatsby'
import Layout from 'components/Layout'
import { Wrap, Section } from 'components/UI'
import useGames from 'hooks/useGames'

const Games = () => {
  const games = useGames()

  return (
    <Layout title="Games">
      <Wrap>
        <Section>
          <h1>Games</h1>
          <ul>
            {games.map(({ title, uid }) => (
              <li>
                <h2>
                  <Link to={`/games/${uid}`}>{title}</Link>
                </h2>
              </li>
            ))}
          </ul>
        </Section>
      </Wrap>
    </Layout>
  )
}

export default Games
