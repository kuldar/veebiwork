///////////////
//  Imports  //
///////////////

import css from 'styled-jsx/css'
import Link from 'next/link'

/////////////////////////
//  Component: Layout  //
/////////////////////////

const Layout = ({ children }) => (
  <>
    <nav>
      <Link href="/"><a>home</a></Link>
      <Link href="/about"><a>about</a></Link>
    </nav>

    <main>{children}</main>

    <style jsx>{styles}</style>
  </>
)

//////////////
//  Styles  //
//////////////

const styles = css`
  nav {
    text-align: center;
  }
  nav a {
    margin-right: 2px;
    padding: 4px;
  }
  main {
    display: flex;
    flex-direction: column;
  }
`

export default Layout
