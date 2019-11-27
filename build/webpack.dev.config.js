const merge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')
const baseConfig = require('./webpack.base.config')
const devConfig = merge(baseConfig, {
    entry: path.resolve(__dirname, '../script/dev-entry.js'),
    output: {
      path: path.resolve(__dirname, '../dev-dist'),
      filename: './dev-bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'dev-index.html',
        template: 'dev-index.html'
      })
    ],
    devServer: {
      host: "localhost",
      /*服务端压缩是否开启*/
      compress: true,
      /*配置服务端口号*/
      port: 8889,
      open: false
    },
    devtool: 'eval' // faster complie than source-map
})

module.exports = devConfig