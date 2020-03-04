///////////////
//  Imports  //
///////////////

import css from 'styled-jsx/css'
import Layout from '../../components/layout'

/////////////////
//  Page: Job  //
/////////////////

const Post = ({ job }) => {

  // Check if job exists
  if (!job) return <div>Not found</div>

  // Get HTML and attributes for a job
  const { html, attributes } = job.default

  return (
    <Layout>
      <article>
        <h1>{attributes.title}</h1>
        <img src={attributes.company_logo} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <style jsx>{styles}</style>
    </Layout>
  )
}

//////////////
//  Styles  //
//////////////

const styles = css`
  article { margin: 0 auto; }
  h1 { text-align: center; }
`

/////////////////////
//  Data fetching  //
/////////////////////

Post.getInitialProps = async ({ query }) => {
  const { slug } = query
  const job = await import(`../../content/jobs/${slug}.md`).catch(() => null)
  return { job }
}

export default Post
