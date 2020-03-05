///////////////
//  Imports  //
///////////////

import css from 'styled-jsx/css'
import Layout from '../components/layout'
import t from '../lib/theme'

///////////////////
//  Page: About  //
///////////////////

const About = () => (
  <Layout>
    <h1>About</h1>

    <main>
      <p>Well, hello there..</p>
    </main>

    <style jsx>{styles}</style>
  </Layout>
)

//////////////
//  Styles  //
//////////////

const styles = css`
  h1 {
    font-weight: bold;
  }

  main {}
`

export default About