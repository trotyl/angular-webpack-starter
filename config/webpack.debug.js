const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const HtmlPlugin = require('html-webpack-plugin')
const config = require('./webpack.common.js')

module.exports = webpackMerge(config, {
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true
        }),
        new HtmlPlugin({
            chunksSortMode: 'dependency',
            template: 'index.html',
            inject: 'body',
            hash: true
        })
    ]
})
