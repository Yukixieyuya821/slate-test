const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const src = path.join(__dirname, '../src');

module.exports = {
  entry: path.join(src, 'main.js'),
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  resolve:{
    extensions:['.js', '.vue']
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve('./public/index.html')
    })
  ]
};
