const { resolve } = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    context: resolve(__dirname, '../src'),
    entry: {
        main: './main.ts',
        polyfill: './polyfill.ts',
        vendor: './vendor.ts'
    },
    devServer: {
        compress: true,
        historyApiFallback: true,
        port: 3000
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.ts$/, loader: `ts` },
            { test: /\.html$/, exclude: [/index\.html/], loader: `file!extract!html` },
            { test: /\.css$/, loader: `file!extract!css` }
        ]
    },
    output: {
        chunkFilename: '[id].bundle.js',
        filename: '[name].bundle.js',
        path: './dist'
    },
    plugins: [
        new CopyPlugin([{
            from: `./assets`, to: `./assets`
        }]),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['polyfill', 'vendor'].reverse()
        }),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.EnvironmentPlugin([
            'NODE_ENV'
        ])
    ],
    resolve: {
        alias: {
            rxjs: `@reactivex/rxjs/dist/cjs`
        },
        extensions: ['', '.ts', '.js']
    }
}
