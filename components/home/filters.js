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

    <div className='input'>
      <label for='keyword'>Keyword</label>
      <input type='text' placeholder='Enter Keyword...' id='keyword' />
    </div>

    <div className='input'>
      <label for='location'>Location</label>
      <input type='text' placeholder='Enter Location...' id='location' />
    </div>

    <div className='dropdown'>
      <label for='specialties'>Specialties</label>
      <select id='specialties'>
        <option value='all'>All</option>
        <option value='design'>Design</option>
        <option value='development'>Development</option>
        <option value='marketing'>Marketing</option>
        <option value='support'>Support</option>
      </select>
    </div>

    <div className='checkboxes'>
      <div className='checkbox'>
        <input type='checkbox' id='remote-friendly' />
        <label for='remote-friendly'>Remote Friendly</label>
      </div>

      <div className='checkbox'>
        <input type='checkbox' id='full-time' />
        <label for='full-time'>Full Time</label>
      </div>
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
    position: sticky;
    top: ${t.spacing[4]};
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

  .input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: ${t.spacing[6]};
  }

  .input label {
    cursor: pointer;
    display: block;
    font-weight: ${t.font.semibold};
    line-height: 1;
    margin-bottom: ${t.spacing[3]};
  }

  .input input {
    outline: none;
    width: 100%;
    border: none;
    border-radius: ${t.radius.md};
    padding: ${t.spacing[3]} ${t.spacing[4]};
    font-size: ${t.text[16]};
    line-height: 1;
    color: ${t.white};
    background-color: ${t.gray[650]};
  }

  .input input::placeholder {
    color: ${t.gray[400]};
  }

  .input input:focus {
    box-shadow: 0 0 0 2px ${t.gray[400]};
    background-color: ${t.gray[500]};
  }

  .input input:focus::placeholder {
    color: ${t.gray[300]};
  }

  .dropdown {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: ${t.spacing[6]};
  }

  .dropdown label {
    cursor: pointer;
    display: block;
    font-weight: ${t.font.semibold};
    line-height: 1;
    margin-bottom: ${t.spacing[3]};
  }

  .dropdown select {
    outline: none;
    width: 100%;
    border: none;
    border-radius: ${t.radius.md};
    height: 40px;
    padding: ${t.spacing[3]} ${t.spacing[4]};
    font-size: ${t.text[16]};
    line-height: 1;
    color: ${t.white};
    background-color: ${t.gray[650]};
  }

  .dropdown select:focus {
    box-shadow: 0 0 0 2px ${t.gray[400]};
    background-color: ${t.gray[500]};
  }

  .checkboxes {
    border: 1px solid ${t.gray[500]};
    border-radius: ${t.radius.md};
    padding: ${t.spacing[4]};
    margin-bottom: ${t.spacing[6]};
  }

  .checkbox {
    display: flex;
  }

  .checkbox + .checkbox {
    margin-top: ${t.spacing[4]};
  }

  .checkbox input {
    cursor: pointer;
    margin-right: ${t.spacing[3]};
  }

  .checkbox label {
    display: block;
    cursor: pointer;
    font-weight: ${t.font.semibold};
    line-height: 1;
    color: ${t.gray[400]};
  }

  .checkbox input:checked + label {
    color: ${t.white};
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
    outline: none;
  }

  button:hover {
    background-color: ${t.purple[500]};
  }

  button:active {
    position: relative;
    top: 1px;
  }
`

export default Filters