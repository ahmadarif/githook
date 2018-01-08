const { router, get, post } = require('microrouter')
const SecretKeyValidation = require('./lib/SecretKeyValidation')
const { getIndex, postGithub } = require('./routes')

const secretObj = SecretKeyValidation([
    {
        url: '/',
        provider: 'github',
        secret: 'YOUR_GITHUB_SECRET_KEY',
        branch: 'master'
    }
])

module.exports = secretObj(router(
    get('/', getIndex),
    post('/', postGithub)
))