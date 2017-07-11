const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  context: __dirname,
  entry: {
    js: './src/index.js',
    css: [
      './src/public/stylesheets/base.scss',
      './src/public/stylesheets/partials/_addons.scss',
      './src/public/stylesheets/partials/_modal.scss'
    ]
  },
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
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass'),
      }],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
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
    new ExtractTextPlugin('src/public/stylesheets/app.css', {
      allChunks: true,
    }),
  ],
};

module.exports = config;
