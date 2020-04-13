const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin
const port = process.env.PORT || 3001

module.exports = {
  context: __dirname,
  entry: ["react-hot-loader/patch", "./src/App.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    modules: ["node_modules", "./src"],
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 100000,
            },
          },
        ],
      },
      {
        test: /\.(scss)$/,
        loader: "sass-loader",
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  // plugins: [new CleanWebpackPlugin(), new BundleAnalyzerPlugin({ analyzerMode: 'disabled' })],
  plugins: [new CleanWebpackPlugin(), new BundleAnalyzerPlugin({})],
  devServer: {
    port,
    stats: "errors-warnings",
    overlay: {
      warnings: true,
      errors: true,
    },
    historyApiFallback: true,
    publicPath: "/dist/",
  },
}
