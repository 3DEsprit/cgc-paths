const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'App'),
  build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {
  entry: {
    app: PATHS.app
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: '/bundle.js'
  },
  node: {
    fs: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\/json$/,
        loader: ['json'],
        include: PATHS.app
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: PATHS.app
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader?limit=100000&mimetype=application/font-woff',
        include: PATHS.app
      },
      {
        test: /\.ttf$/,
        loader: 'file-loader',
        include: PATHS.app
      },
      {
        test: /\.eot$/,
        loader: 'file-loader',
        include: PATHS.app
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        include: PATHS.app
      }
    ]
  }
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.build,

      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // display only errors to reduce the amount of output
      // stats: 'errors-only',

      // parse host and port from env so this is easy
      // to customize
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        template: require('html-webpack-template'),
        appMountId: 'app'
      })
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
}
