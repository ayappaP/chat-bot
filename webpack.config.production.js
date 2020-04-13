const webpack = require("webpack")
const merge = require("webpack-merge")
const Dotenv = require("dotenv-webpack")
const TerserPlugin = require("terser-webpack-plugin")
const webpackCommonConfig = require("./webpack.config.common")
const path = require("path")

module.exports = merge(webpackCommonConfig, {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        exclude: /node_modules/,
        terserOptions: {
          // warnings: true,
          compress: {},
        },
      }),
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({ NODE_ENV: "production" }),
    new Dotenv({
      path: path.resolve(__dirname, ".env.production"),
      systemvars: true,
    }),
  ],
  devtool: "source-map",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devServer: {
    compress: true,
    overlay: false,
  },
})
