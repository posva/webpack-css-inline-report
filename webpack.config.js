const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin')
  .default
const path = require('path')

module.exports = () => {
  /** @type {import('webpack').Configuration} */
  const config = {
    entry: path.resolve(__dirname, './index.js'),
    mode: 'production',

    plugins: [
      new HtmlWebpackPlugin(),
      new HTMLInlineCSSWebpackPlugin(),
    ],
  }

  return config
}
