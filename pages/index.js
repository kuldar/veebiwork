///////////////
//  Imports  //
///////////////

import Layout from '../components/layout'
import Hero from '../components/home/hero'
import Jobs from '../components/home/jobs'

//////////////////
//  Page: Home  //
//////////////////

const Home = ({ jobs }) => (
  <Layout>
    <Hero />
    <Jobs jobs={jobs} />
  </Layout>
)

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
  const jobs = await importJobs()
  return { jobs }
}

export default Home