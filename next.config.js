/////////////////
//  Libraries  //
/////////////////

const fs = require('fs')

//////////////////////////
//  Get paths for jobs  //
//////////////////////////

const jobsFolder = './content/jobs'

const getPathsForJobs = () => (
  fs.readdirSync(jobsFolder).reduce((acc, jobFileName) => {

    // Create a slug from file name
    const slug = jobFileName.substring(0, jobFileName.length - 3)

    // Return all paths
    return Object.assign(
      acc,
      {
        [`/job/${slug}`]: {
          page: '/job/[slug]',
          query: { slug: slug }
        }
      }
    )
  }, {})
)

////////////////////////////
//  Export configuration  //
////////////////////////////

module.exports = {

  // Webpack config
  webpack: configuration => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    })
    return configuration
  },

  // Pathmap config
  async exportPathMap(defaultPathMap) {
    return { ...defaultPathMap, ...getPathsForJobs() }
  }
}
