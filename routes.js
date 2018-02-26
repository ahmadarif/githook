const shell = require('shelljs')

exports.github = async (req, res) => {
    shell.echo('Echo using shelljs')
    
    // exec('git pull origin master', function(code, stdout, stderr) {
    //     console.log('Exit code:', code);
    //     console.log('Program output:', stdout);
    //     console.log('Program stderr:', stderr);
    // })

    return { message: 'success' }
}

exports.gitlab = async (req, res) => {
    shell.echo('gitlab')
    return { message: 'gitlab success' }
}