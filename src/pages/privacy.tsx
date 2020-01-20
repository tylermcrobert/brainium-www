import React from 'react'
import Layout from 'components/Layout'
import { useStaticQuery, graphql } from 'gatsby'

const PRIVACY_MARKDOWN = graphql`
  {
    file(relativePath: { eq: "privacy.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`

const Privacy: React.FC = () => {
  const data: PageData = useStaticQuery(PRIVACY_MARKDOWN)
  const pageContent = data.file.childMarkdownRemark.html

  return (
    <Layout title="Privacy">
      <div className="container">
        <div className="styled">
          <h1>Privacy Policy</h1>
          <div dangerouslySetInnerHTML={{ __html: pageContent }} />
        </div>
      </div>
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
export default Privacy
