import React from 'react'
import Layout from 'components/Layout'
import { useStaticQuery, graphql } from 'gatsby'

const ABOUT_MARKDOWN = graphql`
  {
    file(relativePath: { eq: "about.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`

const About: React.FC = () => {
  const data: PageData = useStaticQuery(ABOUT_MARKDOWN)
  const pageContent = data.file.childMarkdownRemark.html

  return (
    <Layout title="About">
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
    </Layout>
  )
}

type PageData = {
  file: {
    childMarkdownRemark: {
      html: string
    }
  }
}
export default About
