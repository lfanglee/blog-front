const path = require('path');

module.exports = {
    dev: {
        env: '"development"',
        outputPath: path.resolve(__dirname, '../dist'),
        outputPublicPath: '/',

        host: 'http://localhost',
        port: 3000,
        autoOpenBroswer: false,
        useEslint: false
    },
    pro: {
        env: '"production"',
        outputPath: path.resolve(__dirname, '../dist'),
        outputPublicPath: '/'
    }
}