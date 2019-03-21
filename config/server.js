const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')

const app = express()
const config = require('./webpack.config.js')
const {
    publicPath
} = config.output
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
    publicPath
}))

app.listen(4001, () => {
    console.log('server run at 4001...')
})