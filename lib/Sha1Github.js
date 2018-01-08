const crypto = require('crypto')

const Sha1Github = function (data, key) {
    return 'sha1=' + crypto.createHmac('sha1', key).update(data).digest('hex')
}

module.exports = Sha1Github