const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
const config = require('./webpack.common.js')

module.exports = webpackMerge(config, {
    output: {
        chunkFilename: '[id].bundle.min.js',
        filename: '[name].bundle.min.js'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: { screw_ie8 : true },
            compress: {
                screw_ie8: true,
                warnings: false
            },
            comments: false
        }),
        new HtmlPlugin({
            chunksSortMode: 'dependency',
            template: 'index.html',
            inject: 'body',
            hash: true,
            minify: {
                caseSensitive: true,
                collapseWhitespace: true
            }
        })
    ]
})
