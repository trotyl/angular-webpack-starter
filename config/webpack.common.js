const { resolve } = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    context: resolve(__dirname, '../src'),
    entry: {
        main: './main.ts',
        polyfill: [
            'core-js/fn/reflect/define-metadata',
            'core-js/fn/reflect/get-metadata',
            'core-js/fn/reflect/get-own-metadata',
            'core-js/fn/reflect/metadata',
            'zone.js'
        ],
        vendor: [
            '@angular/core',
            '@angular/common',
            '@angular/http',
            '@angular/router',
            '@angular/platform-browser-dynamic',
            '@reactivex/rxjs/Observable',
            '@reactivex/rxjs/Subject',
            '@reactivex/rxjs/add/operator/toPromise',
            'angular2-in-memory-web-api'
        ]
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
            { test: /\.component.html$/, loader: `file!extract!html` },
            { test: /\.component.css$/, loader: `file!extract!css` }
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
            '@reactivex/rxjs': `@reactivex/rxjs/dist/cjs`,
            'rxjs': `@reactivex/rxjs/dist/cjs`
        },
        extensions: ['', '.ts', '.js']
    }
}
