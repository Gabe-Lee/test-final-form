/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const serverEntry = path.resolve(__dirname, 'src/server/index.ts');
const serverOutput = path.resolve(__dirname, 'dist/server');
const serverOutFile = 'server.js';

const clientEntry = path.resolve(__dirname, 'src/client/index.tsx');
const clientOutput = path.resolve(__dirname, './dist/client');
const clientOutFile = 'client.js';
const clientTitle = '[YOUR_APP_TITLE]';
const clientTemplate = path.resolve(__dirname, 'src/client/index.html');

const frontend = {
  target: 'web',
  entry: clientEntry,
  output: {
    path: clientOutput,
    filename: clientOutFile,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: clientOutput,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: clientTitle,
      template: clientTemplate,
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};

const backend = {
  target: 'node',
  entry: serverEntry,
  output: {
    path: serverOutput,
    filename: serverOutFile,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  externals: [NodeExternals()],
};

module.exports = [frontend, backend];
