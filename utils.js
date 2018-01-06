const crypto = require('crypto')

exports.sha1Github = function (data, key) {
    return 'sha1=' + crypto.createHmac('sha1', key).update(data).digest('hex')
}