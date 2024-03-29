///////////////
//  Imports  //
///////////////
import css from 'styled-jsx/css'
import Layout from '../components/layout'
import Hero from '../components/home/hero'
import Jobs from '../components/home/jobs'
import Sidebar from '../components/home/sidebar'
import t from '../lib/theme'

//////////////////
//  Page: Home  //
//////////////////

const Home = ({ jobs, filters }) => <>
  <Layout>
    <Hero />
    <main>
      <Jobs jobs={jobs} />
      <Sidebar filters={filters} />
    </main>
  </Layout>

  <style jsx>{styles}</style>
</>

//////////////
//  Styles  //
//////////////

const styles = css`
  main {
    display: flex;
    align-items: flex-start;
    max-width: ${t.width.lg};
    margin: 0 auto;
    padding-bottom: ${t.spacing[16]};
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
Home.getInitialProps = async ({ query }) => {

  console.log({ query })

  let jobs = await importJobs()
  let filters = {}

  // Check for props in query

  if (query.keyword) {
    jobs = jobs.filter(job => job.html.toLowerCase().includes(query.keyword.toLowerCase()))
    filters = { ...filters, keyword: query.keyword }
  }

  if (query.location) {
    filters = { ...filters, location: query.location }
  }

  if (query.specialty) {
    filters = { ...filters, specialty: query.specialty }
  }

  if (query.isRemote && query.isRemote === 'true') {
    jobs = jobs.filter(job => job.attributes.is_remote_friendly === true)
    filters = { ...filters, isRemote: true }
  }

  if (query.isFullTime && query.isFullTime === 'true') {
    jobs = jobs.filter(job => job.attributes.work_type === 'Full-time')
    filters = { ...filters, isFullTime: true }
  }

  // else set props to default

  if (!query) {
    filters = { keyword: '', location: 'all', specialty: 'all', isRemote: false, isFullTime: false }
  }

  return { jobs, filters }
}

export default Home