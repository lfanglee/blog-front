const path = require('path');

module.exports = {
    dev: {
        env: '"development"',
        outputPath: path.resolve(__dirname, '../dist'),
        outputPublicPath: '/',

        host: 'http://localhost',
        port: 3000,
        autoOpenBroswer: true,
        useEslint: true
    },
    pro: {
        env: '"production"',
        outputPath: path.resolve(__dirname, '../dist'),
        outputPublicPath: './'
    }
}