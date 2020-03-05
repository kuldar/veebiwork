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
  <div className='hero'>
    <h1>Veebi Work</h1>

    <p>Lorem ipsum dolor sit amet, <em>consectetur adipiscing elit</em>. Pellentesque sodales id ligula nec volutpat. Etiam mollis sapien quis nulla.</p>

    <Link href='/job/new'>
      <a>Post a Job – as low as $99/mo</a>
    </Link>
  </div>
  <hr />

  <style jsx>{styles}</style>
</>

//////////////
//  Styles  //
//////////////

const styles = css`
  .hero {
    max-width: ${t.width.md};
    margin: 0 auto;
    padding: ${t.spacing[16]} ${t.spacing[8]};
    text-align: center;
  }

  .hero h1 {
    margin-bottom: ${t.spacing[4]};
    line-height: 1;
    font-size: ${t.text[32]};
    font-weight: ${t.font.bold};
  }

  .hero p {
    margin-bottom: ${t.spacing[8]};
    font-size: ${t.text[20]};
    line-height: 1.3;
    color: ${t.gray[300]};
  }

  .hero p em {
    font-style: normal;
    font-weight: ${t.font.semibold};
    color: ${t.white};
  }

  .hero a {
    transition: background-color ${t.transition.normal};
    display: inline-block;
    padding: ${t.spacing[3]} ${t.spacing[4]};
    border-radius: ${t.radius.md};
    font-size: ${t.text[16]};
    font-weight: ${t.font.semibold};
    line-height: 1;
    color: ${t.white};
    background-color: ${t.purple[600]};
  }

  .hero a:hover {
    background-color: ${t.purple[500]};
  }

  hr {
    border-color: ${t.gray[700]};
  }
`

export default Hero
