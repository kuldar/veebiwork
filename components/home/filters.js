///////////////
//  Imports  //
///////////////

import css from 'styled-jsx/css'
import t from '../../lib/theme'

/////////////////////////////////
//  Component: Home / Filters  //
/////////////////////////////////

const Filters = () => <>
  <div className='filters'>

    <div className='input-group'>
      <label for='keyword'>Keyword</label>
      <input type='text' placeholder='Enter Keyword...' id='keyword' />
    </div>

    <hr />

    <div className='input-group'>
      <label for='location'>Location</label>
      <input type='text' placeholder='Enter Location...' id='location' />
    </div>

    <div className='checkbox-group'>
      <label for='remote-friendly'>Remote Friendly</label>
      <input type='checkbox' id='remote-friendly' />
    </div>

    <div className='checkbox-group'>
      <label for='full-time'>Full Time</label>
      <input type='checkbox' id='full-time' />
    </div>

    <button>Search</button>
  </div>

  <style jsx>{styles}</style>
</>

//////////////
//  Styles  //
//////////////

const styles = css`
  .filters {
    margin-left: ${t.spacing[8]};
    width: ${t.width.xxxs};
    padding: ${t.spacing[6]};
    background: ${t.gray[800]};
    border-radius: ${t.radius.md};
  }

  .filters hr {
    border-color: ${t.gray[500]};
    margin: ${t.spacing[6]} 0;
  }

  .input-group {
    margin-bottom: ${t.spacing[4]};
  }

  .input-group label {
    display: block;
    font-weight: ${t.font.semibold};
    line-height: 1;
    margin-bottom: ${t.spacing[4]};
  }

  .input-group input {
    outline: none;
    width: 100%;
    border: none;
    border-radius: ${t.radius.md};
    padding: ${t.spacing[3]} ${t.spacing[4]};
    font-size: ${t.text[16]};
    line-height: 1;
    color: ${t.gray[900]};
  }

  .input-group input:focus,
  .input-group input:active {
    box-shadow: 0 0 0 4px ${t.purple[600]};
  }

  .checkbox-group {
    margin-bottom: ${t.spacing[4]};
  }

  .checkbox-group label {
    display: block;
    font-weight: ${t.font.semibold};
    line-height: 1;
    margin-bottom: ${t.spacing[4]};
  }

  button {
    transition: background-color ${t.transition.normal};
    display: block;
    width: 100%;
    padding: ${t.spacing[3]} ${t.spacing[4]};
    border-radius: ${t.radius.md};
    font-size: ${t.text[16]};
    font-weight: ${t.font.semibold};
    line-height: 1;
    color: ${t.white};
    background-color: ${t.purple[600]};
  }
`

export default Filters