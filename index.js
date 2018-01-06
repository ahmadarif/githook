const { json, send } = require('micro')
const { router, get, post } = require('microrouter')

const index = (req, res) => res.end('Welcome to Micro')
const webhook = async (req, res) => {
    console.log(req.headers)
    const response = await json(req)
    return response
}

module.exports = router(
    get('/', index),
    post('/', webhook)
)