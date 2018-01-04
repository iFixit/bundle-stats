const path = require('path');
const webpackMerge = require('webpack-merge');
const HtmlPlugin = require('html-webpack-plugin');

const cssConfig = require('./build/webpack/css');

const projectDir = __dirname;
const distDir = path.resolve(projectDir, 'dist');

module.exports = webpackMerge(
  {
    context: path.join(projectDir, 'src'),
    entry: {
      main: './index.jsx',
    },
    output: {
      path: distDir,
      filename: '[name].js',
    },
    resolve: {
      extensions: ['.jsx', '.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          enforce: 'pre',
          use: 'eslint-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.jsx?$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlPlugin({
        template: './index.html',
        filename: 'index.html',
      }),
    ],
    devtool: 'source-map',
    devServer: {
      inline: true,
      historyApiFallback: true,
      contentBase: distDir,
    },
  },
  cssConfig,
);
