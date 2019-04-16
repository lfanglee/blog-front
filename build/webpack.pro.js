'use strict';
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base');
const config = require('./config');

module.exports = merge(baseConfig, {
    output: {
        path: config.pro.outputPath,
        publicPath: config.pro.outputPublicPath
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
            title: 'blog-front',
            inject: true,
            minify: {
                collapseWhitespace: true,
                removeComments: true,
            }
        }),
        // new CopyWebpackPlugin([
        //     {
        //         from: 'src/views/main-components/text-editor/tinymce',
        //         to: 'js'
        //     }
        // ], 
        // {
        //     ignore: [
        //         'text-editor.vue'
        //     ]
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor-base', 'vendor-exten'],
            minChunks: Infinity
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: config.pro.env
            }
        }),
        new CleanWebpackPlugin(['dist/*'], {
            root: path.resolve(__dirname, '../')
        })
    ]
});