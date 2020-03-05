///////////////
//  Imports  //
///////////////

import Layout from '../../components/layout'
import Listing from '../../components/job/listing'

/////////////////
//  Page: Job  //
/////////////////

const Job = ({ job }) => {

  // Check if job exists
  if (!job) return <div>Not found</div>

  // Get HTML and attributes for a job
  const { html, attributes } = job.default

  return (
    <Layout>
      <Listing
        attributes={attributes}
        html={html} />
    </Layout>
  )
}

/////////////////////
//  Data fetching  //
/////////////////////

Job.getInitialProps = async ({ query }) => {
  const { slug } = query
  const job = await import(`../../content/jobs/${slug}.md`).catch(() => null)
  return { job }
}

export default Job