const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

//将内嵌在 head 标签中的 css 样式 分离 成单独的文件
const ExtractTextPluginCss = require('extract-text-webpack-plugin')
const ExtractTextPluginSass = require('extract-text-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

const output = () => {
    const obj = {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist')
    }
    if(process.env.NODE_ENV === 'production') {
        return Object.assign(obj, {
            publicPath: '/',
        })
    }
    return obj
}

module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'),
    output: output(),
    mode: 'development',
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
        new HtmlPlugin(),
        new VueLoaderPlugin()
    ],
    devServer: {
        contentBase: '../public', //此配置告知 webpack-dev-server ，在 localhost:8080 建立服务，将 dist 目录下的文件作为可访问文件。
        compress: true,  //开启 Gzip 压缩
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            '@': path.resolve(__dirname, 'src')
        }
    }
}