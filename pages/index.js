///////////////
//  Imports  //
///////////////

import Link from 'next/link'
import css from 'styled-jsx/css'
import Layout from '../components/layout'

//////////////////
//  Page: Home  //
//////////////////

const Home = ({ jobsList }) => (
  <Layout>

    { jobsList.map(job => (
      <div key={job.slug} className="job">
        <Link href="/job/[slug]" as={`/job/${job.slug}`}>
          <a>
            <img src={job.attributes.company_logo} />
            <h2>{job.attributes.title}</h2>
          </a>
        </Link>
      </div>
    ))}

    <style jsx>{styles}</style>
  </Layout>
)

//////////////
//  Styles  //
//////////////

const styles = css`
  .job {
    text-align: center;
  }
  img {
    max-width: 100%;
    max-height: 300px;
  }
`

/////////////////////
//  Data fetching  //
/////////////////////

// Markdown importer
const importJobs = async () => {

  // Get paths for all markdown files
  const markdownFiles = require
    .context('../content/jobs', false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2))

  // Import all markdown files
  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import(`../content/jobs/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}

// Add the data into page props
Home.getInitialProps = async () => {
  const jobsList = await importJobs()
  return { jobsList }
}

export default Home