const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: __dirname,
    entry: {
        main: './src/main.ts'
    },
    devServer: {
        compress: true,
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 3000,
    },
    devtool: 'eval',
    module: {
        loaders: [
            { 
                test: /\.ts$/, 
                loader: `ts` 
            }
        ]
    },
    output: {
        chunkFilename: '[id].bundle.js',
        filename: '[name].bundle.js',
        path: './dist',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    resolve: {
        alias: {
            rxjs: `@reactivex/rxjs/dist/es6`
        },
        extensions: ['', '.ts', '.js']
    }
}
