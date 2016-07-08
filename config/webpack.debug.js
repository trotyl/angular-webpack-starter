const webpackMerge = require('webpack-merge')
const config = require('./webpack.common.js')

module.exports = webpackMerge(config, {
    debug: true
})
