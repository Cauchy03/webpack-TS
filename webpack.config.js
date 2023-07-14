const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: "./src/index.ts", // 入口文件
  mode: "development",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "index.js"
  }, // 出口文件

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './public/index.html'
    }) // 打包生成html模板
  ],
  devServer: {
    port: 2000, // 端口号
    proxy: {} // 代理
  },
  resolve: {
    extensions: ['.js', '.ts'] // 匹配后缀
  },
}