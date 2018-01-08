const { buffer } = require('micro')
const Sha1Github = require('./Sha1Github')

const SecretKeyValidation = options => handler => async (req, res) => {
    let url, provider, secret, sig, event, sigDecrypted
    const payload = await buffer(req)

    // find the match URL
    for (let i = 0; i < options.length; i++) {
        if (req.url == options[i].url) {
            url = options[i].url
            provider = options[i].provider
            secret = options[i].secret
            break
        }
    }

    // get the provider
    switch (provider) {
        case 'github':
            sig = req.headers['x-hub-signature']
            event = req.headers['x-github-event']
            sigDecrypted = Sha1Github(payload, secret)
            break
    }

    return handler(req, res)
    if (sigDecrypted == sig) {
        return handler(req, res)
    } else {
        return {}
    }
}

module.exports = SecretKeyValidation