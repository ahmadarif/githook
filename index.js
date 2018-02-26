const { router, get, post } = require('microrouter')
const Validation = require('./lib/Validation')
const routes = require('./routes')

const validationObj = Validation([
    {
        url: '/github',
        provider: 'github',
        secret: 'YOUR_GITHUB_SECRET_KEY',
        branch: 'master', // default: master
    },
    {
      url: '/gitlab',
      provider: 'gitlab',
      secret: 'YOUR_GITLAB_SECRET_KEY',
      branch: 'master',
    }
])

module.exports = validationObj(router(
    post('/github', routes.github),
    post('/gitlab', routes.gitlab)
))