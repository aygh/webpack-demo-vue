const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')//代码压缩
module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[chunkhash].js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/'
    },
    plugins: [
        // new UglifyJsPlugin({
        //     test: /\.js($|\?)/i,
        //     exclude: /node_modules/
        // })
    ]
})