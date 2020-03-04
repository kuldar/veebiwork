///////////////
//  Imports  //
///////////////

import css from 'styled-jsx/css'
import t from '../styles/theme'

/////////////////////////
//  Component: Layout  //
/////////////////////////

const Layout = ({ children }) => (
  <>
    <main>{children}</main>
    <style jsx global>{globalStyles}</style>
  </>
)

//////////////
//  Styles  //
//////////////

const globalStyles = css.global`
  body {
    color: ${t.white};
    background-color: ${t.gray[900]};
  }
`

export default Layout
