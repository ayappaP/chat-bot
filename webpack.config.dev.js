const webpack = require("webpack")
const merge = require("webpack-merge")
const Dotenv = require("dotenv-webpack")
const webpackCommonConfig = require("./webpack.config.common")
const path = require("path")

module.exports = merge(webpackCommonConfig, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    publicPath: "/dist/",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
    }),
    new Dotenv({
      path: path.resolve(__dirname, ".env.development"),
      systemvars: true,
    }),
  ],
  devServer: {
    hot: true,
  },
})
