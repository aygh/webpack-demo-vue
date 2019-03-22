const path = require('path')
const webpack = require('webpack')

const HtmlPlugin = require('html-webpack-plugin')

//将内嵌在 head 标签中的 css 样式 分离 成单独的文件
const ExtractTextPluginCss = require('extract-text-webpack-plugin')
const ExtractTextPluginSass = require('extract-text-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/main.js'),
        vendor: [
            'vue',
            'vue-router'
        ]
    },
    // entry: path.resolve(__dirname, '../src/main.js'),
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            use: ExtractTextPluginCss.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        }, {
            test: /\.scss$/,
            use: ExtractTextPluginSass.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }, {
            test: /\.(png|svg|jpg|gif|PNG)$/,
            use: 'file-loader'
        }, {
            test: /\.vue$/,
            use: 'vue-loader'
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            }]
        }]
    },
    plugins: [
        new ExtractTextPluginCss('./css/[name].css'),
        new ExtractTextPluginSass('./css/[name].css'),
        new HtmlPlugin({
            // title: 'webpack-demo'
            template: path.join(__dirname, '../public/index.html'),//指定页面模板文件
            filename: 'index.html'  //指定生成的页面名称
        }),
        new VueLoaderPlugin(),
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            '@': path.resolve(__dirname, '../src')
        }
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'vendor',
                    chunks: 'initial',
                    minChunks: 1
                }
            }
        }
    }
}