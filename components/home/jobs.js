///////////////
//  Imports  //
///////////////

import css from 'styled-jsx/css'
import Link from 'next/link'
import t from '../../lib/theme'

//////////////////////////////
//  Component: Home / Jobs  //
//////////////////////////////

const Jobs = ({ jobs }) => <>
  <ul className='jobs'>
    { jobs.map(({ slug, attributes: job }) => (
      <li className='job' key={slug}>
        <Link href="/job/[slug]" as={`/job/${slug}`}>
          <a>
            <header>
              { job.company_logo && <img src={job.company_logo} /> }
              <div>
                <h2>{job.title}</h2>
                <h3>{job.company_name}</h3>
              </div>
            </header>
            <p>{job.short_description}</p>
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
          </a>
        </Link>
      </li>
    ))}
  </ul>

  <style jsx>{styles}</style>
</>

//////////////
//  Styles  //
//////////////

const styles = css`
  .jobs {
    max-width: ${t.width.sm};
    margin: 0 auto;
    padding: ${t.spacing[16]} 0;
  }

  .job {
    margin-bottom: ${t.spacing[2]};
  }

  .job a {
    display: block;
    transition: background-color ${t.transition.normal};
    margin-bottom: ${t.spacing[2]};
    padding: ${t.spacing[8]};
    border-radius: ${t.radius.lg};
    background-color: transparent;
  }

  .job a:hover {
    background-color: ${t.gray[850]};
  }

  .job header {
    display: flex;
    margin-bottom: ${t.spacing[4]};
  }

  .job img {
    height: ${t.spacing[12]};
    width: ${t.spacing[12]};
    border-radius: ${t.radius.full};
    overflow: hidden;
    margin-right: ${t.spacing[4]};
  }

  .job h2 {
    line-height: 1;
    font-weight: ${t.font.bold};
    font-size: ${t.text[24]};
    margin-bottom: ${t.spacing[1]};
  }

  .job h3 {
    color: ${t.gray[300]};
  }

  .job p {
    margin-bottom: ${t.spacing[6]};
    color: ${t.white};
  }

  .job ul {
    display: flex;
  }

  .job li {
    transition: background-color ${t.transition.normal};
    display: flex;
    align-items: center;
    background-color: ${t.gray[700]};
    padding: ${t.spacing[1]} ${t.spacing[2]};
    margin-right: ${t.spacing[4]};
    border-radius: ${t.radius.md};
  }

  .job li svg {
    height: 1rem;
    width: 1rem;
    margin-right: ${t.spacing[2]};
    color: ${t.gray[400]};
  }

  .job li span {
    font-size: ${t.text[14]};
    font-weight: ${t.font.semibold};
    color: ${t.gray[300]};
  }

`

export default Jobs