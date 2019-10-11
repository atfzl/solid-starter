import * as ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const isProd = process.env.NODE_ENV === 'production';
const isAnalyze = !!process.env.ANALYZE;

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

  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
    ],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({ template: '#/index.html' }),
    isAnalyze && new BundleAnalyzerPlugin(),
  ].filter(a => !!a),

  devServer: {
    stats: 'minimal',
    hot: true,
    historyApiFallback: true,
  },
};
