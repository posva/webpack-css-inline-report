const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin')
  .default

module.exports = () => {
  /** @type {import('webpack').Configuration} */
  const config = {
    mode: 'production',

    plugins: [new HtmlWebpackPlugin(), new HTMLInlineCSSWebpackPlugin()],
  }

  return config
}
