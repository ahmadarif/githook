const { router, get, post } = require('microrouter')
const Validation = require('./lib/Validation')
const { getIndex, postGithub, gitlab } = require('./routes')

const validationObj = Validation([
    {
        url: '/',
        provider: 'github',
        secret: 'YOUR_GITHUB_SECRET_KEY',
        branch: 'master', // default: master
        event: 'push' // default: push
    },
    {
      url: '/gitlab',
      provider: 'gitlab',
      secret: 'YOUR_GITHUB_SECRET_KEY',
    }
])

module.exports = router(
    get('/', getIndex), 
    validationObj(
      post('/', postGithub),
      post('/gitlab', gitlab)
    )
)