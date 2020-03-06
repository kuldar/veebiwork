///////////////
//  Imports  //
///////////////

import Link from 'next/link'
import Layout from '../../components/layout'

///////////////////////
//  Page: Job / New  //
///////////////////////

const New = () => {
  return (
    <Layout>
      <Link href='/'>
        <a>Home</a>
      </Link>

      <h1>New job listing page</h1>
    </Layout>
  )
}

export default New