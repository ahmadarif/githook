const { buffer, json, send } = require('micro')
const { router, get, post } = require('microrouter')
const { sha1Github } = require('./utils')
const shell = require('shelljs')

const index = (req, res) => res.end('Welcome to Micro')

const webhook = async (req, res) => {
    const payload = await buffer(req)
    const signDecrypt = sha1Github(payload, 'rahasia')
    const sig = req.headers['x-hub-signature']
    const event = req.headers['x-github-event']

    console.log('Is payload valid? ' + (signDecrypt == sig))
    console.log('Event = ' + event)

    shell.echo('Echo using shelljs')
    /*
    // pull if payload valid
    exec('git pull origin master', function(code, stdout, stderr) {
        console.log('Exit code:', code);
        console.log('Program output:', stdout);
        console.log('Program stderr:', stderr);
    })
    */

    return { message: 'success' }
}

module.exports = router(
    get('/', index),
    post('/', webhook)
)