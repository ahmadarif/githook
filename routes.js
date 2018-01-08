const shell = require('shelljs')

exports.getIndex = async (req, res) => {
     return { message: 'Welcome to Micro' }
}

exports.postGithub = async (req, res) => {
    shell.echo('Echo using shelljs')
    // exec('git pull origin master', function(code, stdout, stderr) {
    //     console.log('Exit code:', code);
    //     console.log('Program output:', stdout);
    //     console.log('Program stderr:', stderr);
    // })

    return { message: 'success' }
}