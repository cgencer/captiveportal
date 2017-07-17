const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const dev = 'development';

const config = {
  context: __dirname,
  entry: [
      './src/index.js', 
//      './src/public/stylesheets/base.scss',
    ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  imageWebpackLoader: {
    mozjpeg: { quality: 65 },
    pngquant: {
      quality: "65-90",
      speed: 4
    },
    svgo: {
      plugins: [
        { removeViewBox: false}, 
        { removeEmptyAttrs: false}
      ]
    }
  },

  module: {
    loaders: [{
      exclude: /node_modules/,
      test: /\.(js|jsx)$/,
      loader: 'babel',
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      include: path.resolve(__dirname, '/public/img/'),
      options: {
        name: '[path][name].[hash].[ext]'
      },
      loaders: [
        'image-webpack-loader'
      ]
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file?name=public/fonts/[name].[ext]'
/*
    }, {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ]
    }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('css!sass'),
*/
    }],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
  plugins: [
  
    new webpack.DefinePlugin({
      'process.env': { 
          NODE_ENV: JSON.stringify(dev) 
      } 
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      mangle: false,
      sourcemap: false,
      minimize: true,
      mangle: { except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad'] },
    }),
/*
    new ExtractTextPlugin('src/public/stylesheets/app.css', {
      filename: "[name].css",
      allChunks: true,
    }),
*/
  ],
};

module.exports = config;
