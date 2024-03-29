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

    <header className='page-header'>
      <button className='back' onClick={() => Router.back()}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        <span>Back</span>
      </button>

      <div className='logo'>
        <Link href='/'>
          <svg width="153" height="49" viewBox="0 0 153 49" fill="none">
            <path d="M139.886 22.7774C140.054 23.0209 139.475 23.5029 139.289 23.2244C139.344 22.9726 139.649 22.8191 139.886 22.7774Z" fill="currentColor"/>
            <path d="M140.193 1.96147C140.369 1.42448 140.693 0.814107 141.305 0.707376C141.825 0.650674 142.237 1.12596 142.335 1.59958C142.327 2.65022 141.842 3.61247 141.502 4.58473C140.369 7.90341 139.24 11.2238 138.108 14.5441C137.141 17.4625 136.068 20.346 135.188 23.2928C135.436 23.231 135.73 23.2444 135.922 23.0409C137.062 22.0086 138.371 21.1464 139.826 20.6328C140.426 20.5011 141.095 20.4544 141.677 20.6878C142.204 21.0747 142.507 21.7518 142.371 22.4039C142.13 23.6963 141.078 24.6519 139.956 25.2323C139.17 25.7292 138.175 25.7909 137.471 26.428C138.465 28.1307 140.288 29.208 142.177 29.6316C144.408 30.0285 146.7 29.4298 148.709 28.4592C149.617 28.0523 150.355 27.3035 151.359 27.1167C151.773 27.3435 152.223 27.7021 152.15 28.2341C152.005 28.5659 151.803 28.8845 151.489 29.0796C148.878 30.9124 145.656 32.0931 142.434 31.7195C140.087 31.4861 137.881 30.2837 136.379 28.4742C135.965 28.0423 135.741 27.4253 135.178 27.1584C134.532 27.9689 134.172 28.9495 133.752 29.8834C133.062 31.4577 132.449 33.072 131.619 34.5813C131.354 35.0099 131.107 35.5135 130.63 35.7386C129.776 35.727 129.223 34.7647 129.509 33.9959C130.663 30.4604 131.781 26.9099 132.965 23.3828C134.022 20.1442 135.194 16.9456 136.222 13.6986C137.523 9.77788 138.863 5.87218 140.193 1.96147ZM139.289 23.2244C139.344 22.9726 139.649 22.8191 139.886 22.7774C140.054 23.0209 139.475 23.5029 139.289 23.2244ZM53.0163 4.03273C53.4449 3.40735 54.6039 3.63582 54.7206 4.39461C54.6122 5.05001 54.4071 5.68873 54.152 6.30244C52.8228 9.52606 51.8139 12.8698 50.7482 16.1868C50.0278 18.4765 49.259 20.7529 48.5486 23.0476C48.155 24.3334 47.6981 25.6058 47.4529 26.9316C49.0605 25.7392 50.5198 24.2533 52.4559 23.5963C54.1336 22.8325 56.2899 23.9798 56.6902 25.7542C56.9236 26.8949 56.932 28.069 56.9053 29.228C58.6497 28.3842 60.4925 27.7655 62.2736 27.0033C62.4987 26.5581 62.6021 25.9961 63.0107 25.6759C63.5977 25.3924 64.098 25.9544 64.3465 26.4247C63.8095 29.1613 62.6071 31.7679 62.517 34.5863C62.5037 35.0982 62.462 35.7436 62.9556 36.0605C63.5093 36.2306 64.0563 35.9321 64.5349 35.6819C65.6906 35.0265 66.8097 34.3128 67.917 33.5773C70.652 31.7729 73.4153 30.0018 75.9952 27.9773C76.3188 27.7188 76.6606 27.4886 77.0092 27.2652C77.2693 26.4163 77.6396 25.6075 78.0348 24.8153C78.2449 24.3934 78.6485 24.0949 79.0888 23.9465C79.6007 23.9065 79.8943 24.3701 80.1044 24.762C78.9904 28.129 77.8547 31.4911 76.8991 34.9065C76.0519 38.4036 75.153 41.9274 75.0246 45.5379C75.8084 45.2594 76.2637 44.5373 76.6823 43.8686C78.2583 41.277 79.951 38.7538 81.4352 36.1072C83.4798 32.56 85.3943 28.9395 87.3805 25.3607C87.8191 24.6502 88.1726 23.8598 88.8013 23.2911C89.2216 22.8875 90.0371 22.9642 90.2656 23.5396C90.5491 24.2317 90.2455 24.9838 90.0654 25.6659C88.9631 28.9395 88.4194 32.3633 87.8508 35.7603C87.6673 37.0311 87.764 38.3202 87.7757 39.5993C87.769 40.3598 88.0309 41.0986 88.4828 41.7056C88.8347 41.6456 89.1999 41.5605 89.4451 41.2787C92.5986 38.1184 94.7266 34.0876 96.3009 29.9485C96.6594 29.0879 96.9046 28.1674 97.4332 27.3902C97.6133 27.1334 97.8668 26.8432 98.217 26.8949C100.567 27.0183 102.912 27.2585 105.268 27.2368C105.728 26.3246 106.722 25.8927 107.678 25.7176C108.52 25.8143 108.929 26.6715 109.476 27.2135C110.565 27.4102 111.679 27.3752 112.776 27.2602C114.01 27.1301 115.251 27.1117 116.49 27.0867C117.097 24.4935 117.761 21.9119 118.526 19.3587C118.846 18.228 119.143 17.049 119.854 16.0884C120.164 15.7031 120.864 15.4797 121.218 15.9299C121.636 16.3652 121.434 17.0273 121.259 17.5259C120.174 20.1909 119.602 23.0209 118.853 25.7876C118.714 26.2846 118.684 26.7999 118.674 27.3119C120.622 25.4441 122.649 23.5679 125.132 22.4356C126.107 22.007 127.126 21.6801 128.154 21.4016C128.914 21.2215 129.923 21.3316 130.332 22.0904C130.5 22.7191 129.856 23.211 129.279 23.2227C126.763 23.6213 124.38 24.742 122.463 26.4213C120.005 28.576 117.942 31.2893 116.985 34.4479C116.835 35.0265 116.74 35.6803 116.281 36.1089C115.853 36.4991 115.096 36.3257 114.877 35.792C114.607 35.1083 114.784 34.3611 114.977 33.6824C115.339 32.1665 115.658 30.6405 116.018 29.1246C114.257 29.1013 112.497 29.2097 110.74 29.2447C110.474 29.2664 110.199 29.3097 109.979 29.4648C109.599 29.8367 109.592 30.4021 109.516 30.894C109.172 33.0287 108.256 35.1216 106.702 36.6525C106.154 37.1995 105.36 37.5097 104.584 37.3596C103.574 37.2729 103.172 36.1022 103.077 35.24C103.028 33.1954 103.3 31.1125 104.092 29.213C102.385 29.2547 100.679 29.1696 98.9725 29.1196C98.5539 29.8951 98.2771 30.7306 97.9419 31.5394C96.7245 34.3795 95.3353 37.1678 93.5009 39.6644C92.695 40.7437 91.8333 41.7802 90.9193 42.7696C90.2572 43.4183 89.3917 43.8836 88.4678 43.9987C87.0753 43.8919 86.2798 42.5361 86.018 41.2987C84.969 38.2752 85.9546 35.1133 86.3232 32.0664C85.6161 32.4933 85.4243 33.3222 85.024 33.9859C82.4191 38.6237 79.8392 43.3232 76.4522 47.4491C75.9435 48.1095 75.1247 48.6114 74.2692 48.5181C73.5821 48.4013 73.2169 47.7276 73.0735 47.1089C72.7232 45.613 72.9267 44.057 73.2385 42.5728C73.8472 38.5153 74.8929 34.5379 76.0086 30.5955C72.9951 32.6801 70.07 34.9115 66.878 36.7209C65.5556 37.4147 64.1197 38.1584 62.5804 38.0033C61.4164 37.8416 60.7326 36.6475 60.5759 35.5752C60.2657 33.4623 60.9844 31.3943 61.5081 29.3764C59.8221 30.0719 58.1544 30.8123 56.5267 31.6311C56.1148 33.0487 55.7496 34.4812 55.221 35.862C53.7767 39.7177 51.537 43.2565 48.777 46.3034C47.8898 47.1589 47.041 48.1528 45.8403 48.5664C45.1182 48.8016 44.1826 48.7715 43.6489 48.1645C43.0586 47.5291 42.8885 46.6069 42.9819 45.7681C43.1253 44.017 43.754 42.331 44.6979 40.8584C46.7208 37.6915 49.2773 34.8798 52.1891 32.5083C52.8845 31.9213 53.6417 31.411 54.3121 30.7923C54.7307 30.4654 54.6906 29.8767 54.7723 29.4031C54.8524 28.2241 54.8774 27.0133 54.5639 25.8643C54.5155 25.6208 54.3237 25.399 54.0619 25.3974C53.078 25.349 52.1107 25.7409 51.3486 26.3446C48.8521 28.3942 46.6124 30.889 45.3933 33.9175C44.8897 35.0982 44.6762 36.409 43.9424 37.483C43.734 37.8399 43.2904 38.0017 42.8935 37.9683C42.4882 37.8766 42.3048 37.468 42.108 37.1478C42.1797 36.6492 42.2598 36.1489 42.4565 35.6819C43.0752 34.0776 43.6172 32.445 44.1359 30.8056C41.3675 32.54 38.6459 34.3545 35.8359 36.0238C34.2349 36.8526 32.5805 37.8583 30.7077 37.7599C29.5087 37.7749 28.2879 37.1161 27.821 35.9804C27.1139 34.3211 27.4191 32.4316 27.9294 30.7623C27.1723 31.3043 26.3601 31.7629 25.5746 32.2615C23.49 33.5773 21.4455 34.9565 19.3008 36.1739C17.8549 36.9077 16.3724 37.7832 14.6964 37.7632C13.6124 37.8082 12.44 37.4063 11.8296 36.4607C11.0258 35.2317 11.0608 33.6657 11.2943 32.2715C11.4761 31.0691 11.9847 29.9585 12.4733 28.8561C11.0625 28.6277 9.65163 28.3742 8.28413 27.9522C7.48531 29.258 6.58143 30.4955 5.74759 31.7779C4.97545 32.9753 4.08158 34.1093 3.0176 35.0616C2.47394 35.5469 1.61675 35.6936 0.996374 35.2617C0.397677 34.8514 0.17254 34.096 0.127513 33.4056C0.0491321 32.2849 0.0724796 31.1442 0.310958 30.0418C0.786246 27.6487 1.26654 25.2423 2.08036 22.9359C2.25547 22.4289 2.60902 21.9169 3.16769 21.8068C3.82476 21.7151 4.37676 22.4172 4.16997 23.0359C3.43285 25.6358 2.54064 28.2207 2.28716 30.9257C2.22212 31.5411 2.30717 32.1565 2.41557 32.7602C3.80975 31.3376 4.70029 29.5249 5.84932 27.9139C6.54808 26.9983 6.95499 25.6792 8.20241 25.3707C9.8234 26.2646 11.6762 26.6131 13.479 26.9366C14.2994 25.5875 15.2233 24.2934 16.299 23.1327C17.2562 22.2354 18.5153 21.5117 19.8678 21.6101C20.8334 21.6951 21.5555 22.614 21.5972 23.5512C21.7206 24.752 21.1136 25.851 20.4298 26.7865C18.7838 29.1847 16.289 30.9307 13.5407 31.8446C13.2288 32.8135 12.9703 33.8658 13.2305 34.8764C13.3889 35.5268 14.0693 35.9171 14.7114 35.8971C15.9188 35.8837 16.9978 35.2617 18.0384 34.718C21.8991 32.5917 25.4896 30.0202 29.2352 27.7054C29.3903 27.6104 29.457 27.4319 29.5537 27.2852C30.3792 25.8109 31.3765 24.4301 32.5138 23.1793C33.4194 22.3088 34.5984 21.6051 35.8892 21.6001C36.578 21.5734 37.2417 21.9836 37.5669 22.584C37.9154 23.1677 37.9104 23.8814 37.802 24.5318C37.6203 25.5041 37.0216 26.3213 36.4579 27.1067C34.8186 29.3498 32.4204 30.9674 29.8005 31.8463C29.4837 32.8419 29.2052 33.9409 29.522 34.9715C29.7455 35.6669 30.5476 35.9788 31.2264 35.8887C32.4855 35.7653 33.5912 35.0849 34.6852 34.5079C38.2173 32.5 41.566 30.1953 44.9831 28.0056C46.3456 23.2644 47.9399 18.5966 49.3907 13.882C50.0395 11.8725 50.6782 9.8596 51.4236 7.88173C51.9123 6.58428 52.3259 5.24346 53.0163 4.03273ZM17.5531 24.5669C16.2573 26.0344 15.2283 27.7171 14.3461 29.4598C15.6086 29.1496 16.6859 28.3625 17.6131 27.4803C18.5604 26.5381 19.4676 25.4257 19.7177 24.0782C19.8045 23.7747 19.5043 23.4795 19.2024 23.5246C18.517 23.5763 17.9917 24.0832 17.5531 24.5669ZM33.8496 24.5252C32.5405 26.0011 31.4949 27.6954 30.6127 29.4548C31.8935 29.1446 32.9825 28.3341 33.9197 27.4353C34.8469 26.4997 35.7358 25.4024 35.9776 24.0732C36.056 23.8031 35.8192 23.5362 35.5507 23.5212C34.8486 23.5262 34.2966 24.0382 33.8496 24.5252ZM105.296 34.8915C106.43 33.9576 107.211 32.6267 107.481 31.1842C107.573 30.5538 107.8 29.8501 107.414 29.273C107.067 29.2047 106.721 29.1463 106.374 29.0996C105.433 30.8623 104.968 32.9019 105.296 34.8915ZM50.8049 36.4841C49.7443 37.5964 48.6403 38.6804 47.7514 39.9412C46.9809 40.9918 46.3639 42.1425 45.7552 43.2916C45.3083 44.1604 44.9714 45.1193 44.9964 46.1083C44.9981 46.3768 45.2332 46.702 45.5217 46.5068C46.3923 46.1149 46.9976 45.3428 47.6197 44.6474C49.6559 42.3093 51.412 39.7027 52.6427 36.8476C53.0496 35.8887 53.4465 34.9148 53.6483 33.8875C52.5743 34.6046 51.7038 35.5702 50.8049 36.4841Z" fill="currentColor"/>
            <path d="M64.028 21.0748C63.6561 20.1976 64.2681 19.1236 65.1353 18.8301C65.654 18.8167 66.3444 19.0352 66.4511 19.6139C66.5428 20.1275 66.7113 20.7496 66.3427 21.1948C65.9191 21.6234 65.2837 21.6951 64.7351 21.8752C64.4682 21.6401 64.158 21.42 64.028 21.0748Z" fill="currentColor"/>
          </svg>
        </Link>
      </div>
    </header>

    <div className='job'>
      <header className='job-header'>
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

    <footer className='footer'>
      <a className='apply' href={job.apply_link}>
        <span>Apply for the Job</span>
      </a>
      <div className='timestamp'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        <span>Added 4 days ago</span>
      </div>
    </footer>
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

  .page-header {
    display: flex;
  }

  .back {
    transition: background-color ${t.transition.normal};
    display: flex;
    justify-self: flex-start;
    align-items: center;
    background-color: ${t.gray[700]};
    padding: ${t.spacing[2]} ${t.spacing[4]};
    border-radius: ${t.radius.md};
    outline: none;
  }

  .back:hover {
    background-color: ${t.gray[600]};
  }

  .back:active {
    position: relative;
    top: 1px;
  }

  .back span {
    font-weight: ${t.font.semibold};
  }

  .back svg {
    width: 1rem;
    height: 1rem;
    margin-right: ${t.spacing[2]};
  }

  .logo {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 ${t.spacing[24]} 0 0;
  }

  .logo svg {
    transition: color ${t.transition.normal};
    cursor: pointer;
    display: block;
    height: 2.5rem;
    width: auto;
    color: ${t.gray[400]};
  }

  .logo svg:hover {
    color: ${t.gray[200]};
  }

  .logo svg:active {
    position: relative;
    top: 1px;
  }

  .job {
    margin-top: ${t.spacing[8]};
    padding: ${t.spacing[8]};
    background-color: ${t.gray[800]};
    border-radius: ${t.radius.md};
  }

  .job-header {
    display: flex;
    margin-bottom: ${t.spacing[8]};
  }

  .job-header img {
    height: ${t.spacing[20]};
    width: ${t.spacing[20]};
    border-radius: ${t.radius.full};
    overflow: hidden;
    margin-right: ${t.spacing[8]};
  }

  .job-header h1 {
    font-size: ${t.text[40]};
    font-weight: ${t.font.bold};
    line-height: 1;
    margin-bottom: ${t.spacing[2]};
  }

  .job-header h2 {
    color: ${t.gray[300]};
    font-size: ${t.text[20]};
    line-height: 1;
    margin-bottom: ${t.spacing[6]};
  }

  .job-header h2 span {
    font-weight: ${t.font.semibold};
  }

  .job-header h2 a {
    color: ${t.gray[400]};
    transition: color ${t.transition.normal};
    margin-left: ${t.spacing[3]};
    text-decoration: underline;
  }

  .job-header h2 a:hover {
    color: ${t.gray[100]};
  }

  .job-header ul {
    display: flex;
  }

  .job-header li {
    transition: background-color ${t.transition.normal};
    display: flex;
    align-items: center;
    background-color: ${t.gray[700]};
    padding: ${t.spacing[1]} ${t.spacing[2]};
    margin-right: ${t.spacing[4]};
    border-radius: ${t.radius.md};
  }

  .job-header li svg {
    height: 1rem;
    width: 1rem;
    margin-right: ${t.spacing[2]};
    color: ${t.gray[400]};
  }

  .job-header li span {
    font-size: ${t.text[14]};
    font-weight: ${t.font.semibold};
    color: ${t.gray[300]};
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: ${t.spacing[6]} 0 0 0;
  }

  .timestamp {
    display: flex;
    align-items: center;
    margin-right: ${t.spacing[6]};
    color: ${t.gray[400]};
  }

  .timestamp svg {
    margin-right: ${t.spacing[4]};
  }

  .apply {
    transition: background-color ${t.transition.normal};
    display: inline-block;
    padding: ${t.spacing[3]} ${t.spacing[4]};
    border-radius: ${t.radius.md};
    font-size: ${t.text[16]};
    font-weight: ${t.font.semibold};
    line-height: 1;
    color: ${t.white};
    background-color: ${t.purple[600]};
    outline: none;
  }

  .apply:hover {
    background-color: ${t.purple[500]};
  }

  .apply:active {
    position: relative;
    top: 1px;
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