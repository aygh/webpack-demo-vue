const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist')
    },
    devServer: {
        contentBase: './public', //此配置告知 webpack-dev-server ，在 localhost:8080 建立服务，将 dist 目录下的文件作为可访问文件。
        compress: true,  //开启 Gzip 压缩
    },
})