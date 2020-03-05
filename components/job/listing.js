///////////////
//  Imports  //
///////////////

import Router from 'next/router'
import Link from 'next/link'
import css from 'styled-jsx/css'
import t from '../../lib/theme'

////////////////////////////////
//  Component: Job / Listing  //
////////////////////////////////

const Listing = ({ attributes: job, html }) => <>
  <div className='container'>

    <button className='back' onClick={() => Router.back()}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
      <span>Back</span>
    </button>

    <div className='job'>
      <header className='header'>
        { job.company_logo && <img src={job.company_logo} /> }
        <div>
          <h1>{job.title}</h1>
          <h2>
            <span>{job.company_name}</span>
            { job.company_website && <a href={job.company_website}>{job.company_website.replace(/(^\w+:|^)\/\//, '').replace(/\/$/, "")}</a> }
          </h2>
          <ul>
            { job.company_location &&
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>{job.company_location}</span>
              </li>
            }
            { job.work_type &&
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                <span>{job.work_type}</span>
              </li>
            }
            { job.is_remote_friendly &&
              <li>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
                <span>Remote friendly</span>
              </li>
            }
          </ul>
        </div>
      </header>

      <main className='markdown' dangerouslySetInnerHTML={{ __html: html }} />
    </div>

    <a className='apply' href={job.apply_link}>
      <span>Apply</span>
    </a>
  </div>

  <style jsx>{styles}</style>
  <style jsx global>{markdownStyles}</style>
</>

//////////////
//  Styles  //
//////////////

const styles = css`

  .container {
    max-width: ${t.width.sm};
    margin: ${t.spacing[8]} auto;
  }

  .back {
    transition: background-color ${t.transition.normal};
    display: flex;
    align-items: center;
    background-color: ${t.gray[700]};
    padding: ${t.spacing[2]} ${t.spacing[4]};
    border-radius: ${t.radius.md};
  }

  .back:hover {
    background-color: ${t.gray[600]};
  }

  .back span {
    font-weight: ${t.font.semibold};
  }

  .back svg {
    width: 1rem;
    height: 1rem;
    margin-right: ${t.spacing[2]};
  }

  .job {
    margin-top: ${t.spacing[8]};
    padding: ${t.spacing[8]};
    background-color: ${t.gray[800]};
    border-radius: ${t.radius.md};
  }

  .header {
    display: flex;
    margin-bottom: ${t.spacing[8]};
  }

  .header img {
    height: ${t.spacing[20]};
    width: ${t.spacing[20]};
    border-radius: ${t.radius.full};
    overflow: hidden;
    margin-right: ${t.spacing[8]};
  }

  .header h1 {
    font-size: ${t.text[40]};
    font-weight: ${t.font.bold};
    line-height: 1;
    margin-bottom: ${t.spacing[2]};
  }

  .header h2 {
    color: ${t.gray[300]};
    font-size: ${t.text[20]};
    line-height: 1;
    margin-bottom: ${t.spacing[6]};
  }

  .header h2 span {
    font-weight: ${t.font.semibold};
  }

  .header h2 a {
    color: ${t.gray[400]};
    transition: color ${t.transition.normal};
    margin-left: ${t.spacing[3]};
    text-decoration: underline;
  }

  .header h2 a:hover {
    color: ${t.gray[100]};
  }

  .header ul {
    display: flex;
  }

  .header li {
    transition: background-color ${t.transition.normal};
    display: flex;
    align-items: center;
    background-color: ${t.gray[700]};
    padding: ${t.spacing[1]} ${t.spacing[2]};
    margin-right: ${t.spacing[4]};
    border-radius: ${t.radius.md};
  }

  .header li svg {
    height: 1rem;
    width: 1rem;
    margin-right: ${t.spacing[2]};
    color: ${t.gray[400]};
  }

  .header li span {
    font-size: ${t.text[14]};
    font-weight: ${t.font.semibold};
    color: ${t.gray[300]};
  }

  .apply {
    transition: background-color ${t.transition.normal};
    display: flex;
    align-items: center;
    background-color: ${t.purple[500]};
    padding: ${t.spacing[2]} ${t.spacing[4]};
    border-radius: ${t.radius.md};
  }
`

const markdownStyles = css.global`
  .markdown h1 {
    margin-top: ${t.spacing[8]};
    margin-bottom: ${t.spacing[2]};
    font-weight: ${t.font.bold};
    font-size: ${t.text[32]};
  }

  .markdown h2 {
    margin-top: ${t.spacing[8]};
    margin-bottom: ${t.spacing[2]};
    font-weight: ${t.font.bold};
    font-size: ${t.text[24]};
  }

  .markdown h3 {
    margin-top: ${t.spacing[8]};
    margin-bottom: ${t.spacing[2]};
    font-weight: ${t.font.bold};
    font-size: ${t.text[20]};
  }

  .markdown h4,
  .markdown h5,
  .markdown h6 {
    margin-top: ${t.spacing[8]};
    font-weight: ${t.font.bold};
    font-size: ${t.text[16]};
  }

  .markdown p {
    margin-bottom: ${t.spacing[4]};
  }

  .markdown a {
    text-decoration: underline;
    color: ${t.purple[300]};
  }

  .markdown ul {
    list-style: disc;
    margin-bottom: ${t.spacing[8]};
  }

  .markdown li {
    margin: 0 0 ${t.spacing[2]} ${t.spacing[4]};
  }
`

export default Listing