///////////////
//  Imports  //
///////////////

import { useState } from 'react'
import { useRouter } from 'next/router'
import css from 'styled-jsx/css'
import t from '../../lib/theme'

/////////////////////////////////
//  Component: Home / Sidebar  //
/////////////////////////////////

const Sidebar = ({ filters }) => {

  // Get the Nextjs router
  const router = useRouter()

  // Set up hooks and variables for filters
  const [keyword, setKeyword] = useState(filters && filters.keyword || '')
  const [location, setLocation] = useState(filters && filters.location || 'all')
  const [specialty, setSpecialty] = useState(filters && filters.specialty || 'all')
  const [isRemote, setIsRemote] = useState(filters && filters.isRemote || false)
  const [isFullTime, setIsFullTime] = useState(filters && filters.isFullTime || false)

  // Handle form input change
  const handleInputChange = e => {
    if (e.target.id === 'keyword') { setKeyword(e.target.value) }
    else if (e.target.id === 'location') { setLocation(e.target.value) }
    else if (e.target.id === 'specialty') { setSpecialty(e.target.value) }
    else if (e.target.id === 'is-remote') { setIsRemote(e.target.checked) }
    else if (e.target.id === 'is-full-time') { setIsFullTime(e.target.checked) }
  }

  // Push filters to params on submit
  const handleFiltersSubmit = e => {
    e.preventDefault()
    const filters = { keyword, location, specialty, isRemote, isFullTime }
    router.push({ pathname: '/', query: filters })
  }

  // Reset filters and state
  // const handleFiltersReset = e => {
  //   e.preventDefault()
  //   setKeyword('')
  //   setLocation('all')
  //   setSpecialty('all')
  //   setIsRemote(false)
  //   setIsFullTime(false)
  //   router.push('/')
  // }

  return <>
    <div className='sidebar'>

      <form
        className='filters'
        onSubmit={handleFiltersSubmit}>
        <div className='input'>
          <input
            type='text'
            onChange={handleInputChange}
            value={keyword}
            placeholder='Otsi märksõna...'
            id='keyword' />
        </div>

        <div className='dropdown'>
          <label htmlFor='location'>Asukoht</label>
          <select
            value={location}
            onChange={handleInputChange}
            id='location'>
            <option value='all'>Kõik</option>
            <option value='tallinn'>Tallinn</option>
            <option value='tartu'>Tartu</option>
            <option value='tartu'>Pärnu</option>
          </select>
        </div>

        <div className='dropdown'>
          <label htmlFor='specialty'>Valdkond</label>
          <select
            value={specialty}
            onChange={handleInputChange}
            id='specialty'>
            <option value='all'>Kõik</option>
            <option value='design'>Disain</option>
            <option value='development'>Arendus</option>
            <option value='marketing'>Turundus</option>
            <option value='support'>Klienditugi</option>
          </select>
        </div>

        <div className='checkboxes'>
          <div className='checkbox'>
            <input
              type='checkbox'
              onChange={handleInputChange}
              checked={isRemote}
              id='is-remote' />
            <label htmlFor='is-remote'>Kaugtöö võimalus</label>
          </div>

          <div className='checkbox'>
            <input
              type='checkbox'
              onChange={handleInputChange}
              checked={isFullTime}
              id='is-full-time' />
            <label htmlFor='is-full-time'>Täisaeg</label>
          </div>
        </div>

        <button type='submit' className='search'>Otsi</button>
      </form>

      {/* <a className='clear' onClick={handleFiltersReset}>Eemalda kõik filtrid</a> */}

      <div className='email'>
        <div className='flex'>
          <img src='/img/email.svg' />
          <p>Uued töökuulutused otse oma e-posti!</p>
        </div>

        <button>Telli tasuta teavitus</button>
      </div>
    </div>

    <style jsx>{styles}</style>
  </>
}

//////////////
//  Styles  //
//////////////

const styles = css`

  .sidebar {
    position: sticky;
    top: ${t.spacing[4]};
    margin-left: ${t.spacing[8]};
    width: ${t.width.xxxs};
  }

  .filters {
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
    appearance: none;
    width: 100%;
    border: none;
    border-radius: ${t.radius.md};
    height: 40px;
    padding: ${t.spacing[2]} ${t.spacing[4]};
    font-size: ${t.text[16]};
    line-height: 1;
    color: ${t.white};
    background-color: ${t.gray[650]};
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 20px;
    background-image: url('/img/chevron-down.svg');
  }

  .dropdown select:focus {
    box-shadow: 0 0 0 2px ${t.gray[400]};
    background-color: ${t.gray[500]};
  }

  .checkboxes {
    border: 1px solid ${t.gray[600]};
    border-radius: ${t.radius.md};
    padding: ${t.spacing[4]};
    margin-bottom: ${t.spacing[6]};
  }

  .checkbox {
    display: flex;
  }

  .checkbox:active {
    position: relative;
    top: 1px;
  }

  .checkbox + .checkbox {
    margin-top: ${t.spacing[4]};
  }

  .checkbox input {
    cursor: pointer;
    margin-right: ${t.spacing[3]};
  }

  .checkbox label {
    user-select: none;
    transition: color ${t.transition.normal};
    display: block;
    cursor: pointer;
    font-weight: ${t.font.semibold};
    line-height: 1;
    color: ${t.gray[400]};
  }

  .checkbox:hover label {
    color: ${t.white};
  }

  .checkbox input:checked + label {
    color: ${t.white};
  }

  .search {
    user-select: none;
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

  .search:hover {
    background-color: ${t.purple[500]};
  }

  .search:active {
    position: relative;
    top: 1px;
  }

  .clear {
    transition: color ${t.transition.normal};
    cursor: pointer;
    display: block;
    text-align: center;
    margin: ${t.spacing[3]} auto 0 auto;
    font-size: ${t.text[14]};
    color: ${t.gray[300]};
  }

  .clear:hover {
    color: ${t.white};
  }

  .clear:active {
    position: relative;
    top: 1px;
  }

  .email {
    border: 1px solid ${t.gray[700]};
    margin-top: ${t.spacing[6]};
    padding: ${t.spacing[4]} ${t.spacing[6]} ${t.spacing[6]} ${t.spacing[6]};
    border-radius: ${t.radius.md};
  }

  .email .flex {
    display: flex;
    align-items: center;
    margin-bottom: ${t.spacing[4]};
  }

  .email img {
    display: block;
    height: 3rem;
    width: auto;
    margin-right: ${t.spacing[4]};
  }

  .email p {
    font-size: ${t.text[14]};
    line-height: 1.4;
    color: ${t.gray[300]};
  }

  .email button {
    transition: background-color ${t.transition.normal};
    width: 100%;
    padding: ${t.spacing[3]} ${t.spacing[4]};
    border-radius: ${t.radius.md};
    font-size: ${t.text[12]};
    font-weight: ${t.font.semibold};
    line-height: 1;
    white-space: nowrap;
    color: ${t.white};
    background-color: ${t.gray[700]};
    outline: none;
  }

  .email button:hover {
    background-color: ${t.gray[600]};
  }

  .email button:active {
    position: relative;
    top: 1px;
  }
`

export default Sidebar