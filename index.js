const { router, get, post } = require('microrouter')
const SecretKeyValidation = require('./lib/SecretKeyValidation')
const { getIndex, postGithub } = require('./routes')

const secretObj = SecretKeyValidation([
    {
        url: '/',
        provider: 'github',
        secret: 'rahasia'
    }
])

module.exports = secretObj(router(
    get('/', getIndex),
    post('/', postGithub)
))