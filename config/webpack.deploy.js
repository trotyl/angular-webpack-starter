const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const config = require('./webpack.common.js')

module.exports = webpackMerge(config, {
    debug: false,
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: { screw_ie8 : true },
            compress: { 
                screw_ie8: true,
                warnings: false
            },
            comments: false
        })
    ]
})
