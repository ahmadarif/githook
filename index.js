const { router, get, post } = require('microrouter')
const Validation = require('./lib/Validation')
const { getIndex, postGithub } = require('./routes')

const validationObj = Validation([
    {
        url: '/',
        provider: 'github',
        secret: 'YOUR_GITHUB_SECRET_KEY',
        branch: 'master'
    }
])

module.exports = validationObj(router(
    get('/', getIndex),
    post('/', postGithub)
))