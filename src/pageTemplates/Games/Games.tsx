import React from 'react'
import { Link } from 'gatsby'
import {
  Layout,
  Wrap,
  Section,
  TextWrap,
  PageIntro,
  PageTitle,
} from 'components'
import useGames from 'hooks/useGames'
import WIREFRAME from './Wireframe'

const Games = () => {
  return (
    <Layout title="Games">
      <Wrap>
        <Intro />
        <Section>
          <GameList />
        </Section>
      </Wrap>
    </Layout>
  )
}

const Intro = () => {
  return (
    <Section>
      <TextWrap center>
        <PageTitle>Games</PageTitle>
        <PageIntro>
          We love making games because we love playing games.
        </PageIntro>
        <p>
          Duis tincidunt arcu in leo fringilla, ac consequat diam venenatis.
          Fusce lacinia est est, eget eleifend sem venenatis eu. learn more
          about why we make games
        </p>
      </TextWrap>
    </Section>
  )
}
const GameList = () => {
  const games = useGames()
  return (
    <Section>
      <WIREFRAME.GamesWrapper>
        {games.map(({ title, uid }) => (
          <Link to={`/games/${uid}`} key={uid}>
            <WIREFRAME.Game>
              <h2>{title}</h2>
            </WIREFRAME.Game>
          </Link>
        ))}
      </WIREFRAME.GamesWrapper>
    </Section>
  )
}

export default Games
