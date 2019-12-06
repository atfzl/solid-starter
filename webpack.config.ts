import * as ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';
const isAnalyze = !!process.env.ANALYZE;

const dropboxAccessToken = process.env.DROPBOX_ACCESS_TOKEN;

if (!dropboxAccessToken) {
  console.error('provide DROPBOX_ACCESS_TOKEN in env');
  process.exit(1);
}

module.exports = {
  mode: !isProd ? 'development' : 'production',

  devtool: 'source-map',

  entry: path.resolve(__dirname, '#'),

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['node_modules', './'],
  },

  externals: {
    'pouchdb-promise': 'Promise',
  },

  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
    ],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({ template: '#/index.html' }),
    new webpack.EnvironmentPlugin({
      DROPBOX_ACCESS_TOKEN: dropboxAccessToken,
    }),
    isAnalyze && new BundleAnalyzerPlugin(),
  ].filter(a => !!a),

  devServer: {
    stats: 'minimal',
    hot: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3450,
  },
};
