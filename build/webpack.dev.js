'use strict';
const pathUtil = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.base');
const config = require('./config');

module.exports = merge(baseConfig, {
    devtool: 'inline-source-map',
    devServer: {
        host: config.host,
        port: config.dev.port,
        open: config.dev.autoOpenBroswer,
        inline: true,
        historyApiFallback: true,
        proxy: {
            '/images': {
                target: config.dev.host,
                secure: false
            },
            '/api': {
                target: `${config.dev.host}:${config.dev.port}/mock`,
                pathRewrite: (path, req) => {
                    const realUrl = req.url.split('?')[0];
                    if (!pathUtil.extname(realUrl)) {
                        req.url = realUrl + '.json';
                    }
                    req.url = req.url.replace(/\/api/, '');
                },
                secure: false
            },
        }
    },
    output: {
        path: config.dev.outputPath,
        publicPath: config.dev.outputPublicPath
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles/[name].[hash:7].css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            // favicon: path.resolve(__dirname, '../favicon.ico'),
            filename: 'index.html',
            template: 'index.html',
            title: 'iLive-admin',
            inject: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor-base', 'vendor-exten'],
            minChunks: Infinity
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: config.dev.env
            }
        })
    ]
});