/* eslint-disable camelcase */
import React from 'react'
import {
  Layout,
  Wrap,
  Section,
  TextWrap,
  PageTitle,
  PageIntro,
} from 'components'
import useCareers from 'hooks/useCareers'
import WIREFRAME from './Wireframe'

const Careers = () => {
  return (
    <Layout title="Careers">
      <Intro />
      <ValueProps />
      <List />
    </Layout>
  )
}

/**
 * Intro
 */

const Intro: React.FC = () => (
  <>
    <Section>
      <Wrap>
        <TextWrap center>
          <PageTitle>Careers</PageTitle>
          <PageIntro>Inspiring copy about working at brainium</PageIntro>
          <p>
            Duis tincidunt arcu in leo fringilla, ac consequat diam venenatis.
            Fusce lacinia est est, eget eleifend sem venenatis eu. Curabitur
            quis quam nulla.
          </p>
        </TextWrap>
      </Wrap>
    </Section>
    <Section>
      <img src="https://via.placeholder.com/1440x800" alt="" width="100%" />
    </Section>
  </>
)

/**
 * Value Props
 */

const VALUE_PROPS: { title: string; desc: string }[] = [
  {
    title: 'Parental Leave',
    desc:
      'Duis tincidunt arcu in leo fringilla, ac consequat diam venenatis. Fusce lacinia est est, eget eleifend sem venenatis eu. Curabitur quis quam nulla.',
  },
  {
    title: 'Parental Leave',
    desc:
      'Duis tincidunt arcu in leo fringilla, ac consequat diam venenatis. Fusce lacinia est est, eget eleifend sem venenatis eu. Curabitur quis quam nulla.',
  },
  {
    title: 'Parental Leave',
    desc:
      'Duis tincidunt arcu in leo fringilla, ac consequat diam venenatis. Fusce lacinia est est, eget eleifend sem venenatis eu. Curabitur quis quam nulla.',
  },
  {
    title: 'Parental Leave',
    desc:
      'Duis tincidunt arcu in leo fringilla, ac consequat diam venenatis. Fusce lacinia est est, eget eleifend sem venenatis eu. Curabitur quis quam nulla.',
  },
]
const ValueProps = () => {
  return (
    <>
      <Section>
        <Wrap>
          <TextWrap center>
            <h5>Benefits</h5>
            <h2>Why Work at Branium?</h2>
            <p>
              Duis tincidunt arcu in leo fringilla, ac consequat diam venenatis.
              Fusce lacinia est est, eget eleifend sem venenatis eu.
            </p>
          </TextWrap>
        </Wrap>
      </Section>
      <Section>
        <Wrap>
          <WIREFRAME.BenefitWrapper>
            {VALUE_PROPS.map(({ title, desc }) => (
              <div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </WIREFRAME.BenefitWrapper>
        </Wrap>
      </Section>
    </>
  )
}

/**
 * Listings
 */

const List = () => {
  const careerData = useCareers()

  return (
    <WIREFRAME.CareerListWrapper>
      <Wrap>
        <Section>
          <TextWrap>
            <h5>Job Openings</h5>
            <h2>We’d love to have you.</h2>
            <p>
              We’re always looking for talented people to work for. Don’t see
              anything on the list? No problem—get ahold of us and we’ll get the
              ball rolling.
            </p>
          </TextWrap>
        </Section>
        <Section>
          {careerData.map(({ city, title, url, state }) => (
            <a href={url} target="blank" rel="noopener noreferrer">
              <WIREFRAME.ListItem>
                <div>
                  <strong>{title}</strong>
                </div>
                <div>
                  {city}, {state}
                </div>
              </WIREFRAME.ListItem>
            </a>
          ))}
        </Section>
      </Wrap>
    </WIREFRAME.CareerListWrapper>
  )
}

export default Careers
