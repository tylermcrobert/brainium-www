import React from 'react'
import { Layout, TextWrap, Wrap, Section } from 'components'
import { Link } from 'gatsby'
import WIREFRAME from './Wireframe'

const About: React.FC = () => {
  return (
    <Layout title="About">
      <Intro />
      <Impact />
      <Career />
    </Layout>
  )
}

/**
 * Intro
 */

const Intro: React.FC = () => (
  <>
    <Section>
      <TextWrap center>
        <h1>deterruisset usu vis scripserit</h1>
        <p>
          Ponderum melius sale et iuvaret et usu simul nusquam inani ex eum cibo
          veritus audiam pro.
        </p>
      </TextWrap>
    </Section>
    <Section>
      <img src="https://via.placeholder.com/1440x800" alt="" width="100%" />
    </Section>
  </>
)

/**
 * Impact
 */

const STATS: { head: string; body: string }[] = [
  { head: '200k+', body: 'Game Downloads' },
  { head: '50k+', body: '5-Star Ratings' },
  { head: '20+', body: 'Funny stat' },
]

const Impact: React.FC = () => (
  <div>
    <Section>
      <TextWrap center>
        <h5>Brainium’s Impact</h5>
        <h2>Copy that sets up Brainium’s success in the market</h2>
        <p>
          Duis tincidunt arcu in leo fringilla, ac consequat diam venenatis.
          Fusce lacinia est est, eget eleifend sem venenatis eu. Curabitur quis
          quam nulla. Aenean ullamcorper odio sit amet ipsum aliquet facilisis.
          Sed in sapien in ex pharetra tempus. Nulla scelerisque
        </p>
      </TextWrap>
    </Section>
    <Section>
      <Wrap>
        <WIREFRAME.Stats>
          {STATS.map(({ head, body }) => (
            <div>
              <h1>{head}</h1>
              <p>{body}</p>
            </div>
          ))}
        </WIREFRAME.Stats>
      </Wrap>
    </Section>
  </div>
)

/**
 * Career
 */

const Career: React.FC = () => (
  <div>
    <img src="https://via.placeholder.com/960x720" width="100%" alt="" />
    <Section>
      <TextWrap center>
        <h5>Working Here</h5>
        <h2>Copy that inspires new talent to work at Brainium</h2>
        <p>
          Duis tincidunt arcu in leo fringilla, ac consequat diam venenatis.
          Fusce lacinia est est, eget eleifend sem venenatis eu.
        </p>
        <Link to="/careers">Careers</Link>
      </TextWrap>
    </Section>
  </div>
)

export default About
