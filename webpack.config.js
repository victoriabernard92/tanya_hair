const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
var LiveReloadPlugin = require('webpack-livereload-plugin');
var options = {}
module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './app.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
     new LiveReloadPlugin(options),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.resolve(__dirname, 'dist', 'assets'),
    publicPath: '/assets',                          // New
    filename: '[name].bundle.js',
  },
  devServer: {
    
      contentBase: path.resolve(__dirname, 'src'),    // New
      // contentBase: path.join(__dirname, 'dist'),
      compress: true,
    port: 9000,
    hot: true
  },
};