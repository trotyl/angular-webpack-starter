const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: resolve(__dirname, '../src'),
    entry: {
        main: './main.ts',
        polyfill: './polyfill.ts'
    },
    devServer: {
        compress: true,
        historyApiFallback: true,
        port: 3000,
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.ts$/, loader: `ts` }
        ]
    },
    output: {
        chunkFilename: '[id].bundle.js',
        filename: '[name].bundle.js',
        path: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunksSortMode: 'dependency',
            template: 'index.html',
            inject: 'body',
            hash: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['polyfill'].reverse()
        }),
        new webpack.optimize.OccurrenceOrderPlugin(true)
    ],
    resolve: {
        alias: {
            rxjs: `@reactivex/rxjs/dist/cjs`
        },
        extensions: ['', '.ts', '.js']
    }
}
