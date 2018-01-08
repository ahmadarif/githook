const { buffer, send } = require('micro')
const Sha1Github = require('./Sha1Github')
const queryString = require('query-string')

const Validation = options => handler => async (req, res) => {
    let url, provider, secret, branch // from options
    let sig, event, sigDecrypted
    const payload = await buffer(req)

    // find the match URL
    for (let i = 0; i < options.length; i++) {
        if (req.url == options[i].url) {
            url = options[i].url
            provider = options[i].provider
            secret = options[i].secret
            branch = options[i].branch
            break
        }
    }

    // if url/path not found
    if (!url) {
        send(res, 404, { message: 'URL not found'})
    }

    // parsing payload to data
    let data
    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        data = queryString.parse(payload.toString())
        data = JSON.parse(data.payload)
    } else {
        data = JSON.parse(payload)
    }

    // get the provider
    switch (provider) {
        case 'github':
            sig = req.headers['x-hub-signature']
            event = req.headers['x-github-event']
            sigDecrypted = Sha1Github(payload, secret)
            break
        default:
            send(res, 400, { message: 'Invalid provider'})
            break
    }

    // check is secret key valid
    if (sigDecrypted != sig) {
        send(res, 400, { message: 'Invalid secret key'})
    }

    // check the branch
    if (branch == data.ref.split('/')[2]) {
        return handler(req, res)
    } else {
        return { message: 'No webhook triggered' }
    }
}

module.exports = Validation