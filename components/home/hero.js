///////////////
//  Imports  //
///////////////

import css from 'styled-jsx/css'
import Link from 'next/link'
import t from '../../styles/theme'

//////////////////////////////
//  Component: Home / Hero  //
//////////////////////////////

const Hero = () => <>
  <div>
    <h1>Veebi Work</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales id ligula nec volutpat. Etiam mollis sapien quis nulla feugiat, in rutrum lectus condimentum.</p>
  </div>
  <Link href='/job/new'>
    <a>Post a Job - as low as $99/mo</a>
  </Link>
  <style jsx>{styles}</style>
</>

//////////////
//  Styles  //
//////////////

const styles = css`
  h1 {
    color: ${t.purple[400]};
  }
`

export default Hero
