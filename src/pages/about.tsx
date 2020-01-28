import React from 'react'
import Layout from 'components/Layout'
import styled from 'styled-components'

const FPO_IMG =
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80'
const About: React.FC = () => {
  return (
    <Layout title="About">
      <Intro>
        <Cap>About Brainium</Cap>
        <h2>We&apos;re a team of hard working dedicated people.</h2>
        <p>
          Phasellus tellus nisi, feugiat sed maximus vitae, venenatis vitae
          nunc. Ut molestie ex sapien, a vestibulum ipsum mattis et. Integer
          pretium, nisl in dapibus pharetra, sem sapien tempus est, ac fermentum
          felis quam et odio. Proin tincidunt
        </p>
      </Intro>
      <img
        src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
        alt=""
        width="100%"
      />
      <Container>
        <h2>Brainium keeps the world entertained.</h2>
        <p>
          Phasellus tristique dui a tempor vulputate. Integer et posuere massa.
          Praesent lobortis justo tellus, nec blandit eros finibus ut. Nulla
          facilisi. Integer quis massa vel nisl congue posuere. Aliquam pretium
          laoreet blandit. Nullam sem enim, pretium at turpis a, iaculis
          malesuada sapien.
        </p>
      </Container>
      <Stats>
        <Stat>2012</Stat>
        Brainium launched
        <Stat>2,000,000+</Stat>
        App Downloads
        <Stat>2,000+</Stat>
        Five-star reviews
      </Stats>
      <img
        src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
        alt=""
        width="100%"
      />
      <Container>
        <Cap>Careers</Cap>
        <h2>Get a job working at the best game company around.</h2>
        <p>
          From day one, we’ve been committed to making Instrument a place where
          people can make the best work of their career — sustainably. This
          means working reasonable hours. Spending each day in a welcoming.
        </p>
      </Container>

      <ValueProp>
        <div>
          <h3>We give you good benefits.</h3>
          <p>
            Phasellus tristique dui a tempor vulputate. Integer et posuere
            massa. Praesent lobortis justo tellus, nec blandit eros finibus ut.
            Nulla facilisi.
            <ul>
              <li>nteger quis massa vel nisl congue posuere.</li>
              <li> Aliquam pretium laoreet blandit.</li>
              <li>Nullam sem enim, pretium at turpis a.</li>
              <li>Iculis malesuada sapien.</li>
            </ul>
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
          alt=""
          width="100%"
        />
      </ValueProp>

      <ValueProp inverted>
        <div>
          <h3>Work alongside the best minds in gaming.</h3>
          <p>
            Phasellus tristique dui a tempor vulputate. Integer et posuere
            massa. Praesent lobortis justo tellus, nec blandit eros finibus ut.
            Nulla facilisi.
            <ul>
              <li>nteger quis massa vel nisl congue posuere.</li>
              <li> Aliquam pretium laoreet blandit.</li>
              <li>Nullam sem enim, pretium at turpis a.</li>
              <li>Iculis malesuada sapien.</li>
            </ul>
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
          alt=""
          width="100%"
        />
      </ValueProp>

      <ValueProp>
        <div>
          <h3>Work culture matters to us.</h3>
          <p>
            Phasellus tristique dui a tempor vulputate. Integer et posuere
            massa. Praesent lobortis justo tellus, nec blandit eros finibus ut.
            Nulla facilisi.
            <ul>
              <li>nteger quis massa vel nisl congue posuere.</li>
              <li> Aliquam pretium laoreet blandit.</li>
              <li>Nullam sem enim, pretium at turpis a.</li>
              <li>Iculis malesuada sapien.</li>
            </ul>
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
          alt=""
          width="100%"
        />
      </ValueProp>
      <Highlight>
        <Container>
          <Cap>Careers</Cap>
          <h2>Let&apos;s build the future of gaming</h2>
          <button type="button">See Open Positions</button>
        </Container>
      </Highlight>
    </Layout>
  )
}

const Highlight = styled.div`
  background: ${props => props.theme.colors.brand.secondary};
  padding: 4rem;
  text-align: center;
  color: white;
`

const ValueProp = styled.div<{ inverted?: boolean }>`
  max-width: 60rem;
  display: flex;
  grid-gap: 1rem;
  margin: 1rem;
  margin: 5rem auto;
  flex-direction: ${props => (props.inverted ? 'row-reverse' : 'row')};
  align-items: center;

  img {
    width: 66%;
    align-self: center;
  }

  > * {
    margin: 0 1rem;
  }

  p {
    font-size: 0.9rem;
  }
`

const Cap = styled.span`
  font-size: 0.7rem;
  text-transform: uppercase;
`

const Stats = styled.div`
  text-align: center;
  margin: 4rem auto;
`

const Stat = styled.h3`
  font-size: 3rem;
  margin: 0 auto;
  margin-top: 1rem;
`

const Container = styled.div`
  max-width: 30rem;
  margin: 3rem auto;
`

const Intro = styled.div`
  max-width: 30rem;
  text-align: center;
  margin: 5rem auto;

  h1 {
    font-size: 1rem;
  }
  h2 {
    max-width: 20rem;
    margin: 0 auto;
  }
`

export default About
