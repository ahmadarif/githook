const shell = require('shelljs')

exports.getIndex = async (req, res) => {
     return { message: 'Welcome to Micro' }
}

exports.postGithub = async (req, res) => {
    // const payload = await buffer(req)
    // const signDecrypt = sha1Github(payload, 'YOUR_OWN_SECRET')
    // const sig = req.headers['x-hub-signature']
    // const event = req.headers['x-github-event']

    // console.log('Is payload valid? ' + (signDecrypt == sig))
    // console.log('Event = ' + event)

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