var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts'],
    root: helpers.root('src', 'app')
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: require.resolve("url-loader") + "?limit=100000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: require.resolve("url-loader") + "?limit=100000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: require.resolve("url-loader") + "?limit=100000&mimetype=application/octet-stream"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: require.resolve("url-loader") + "?limit=100000&mimetype=image/svg+xml"
      },
      {
        test: /\.(eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: require.resolve("file-loader") + "?name=assets/fonts/[name].[hash].[ext]"
      },
      {
        test: /\.(png|jpe?g|gif|bmp|ico)$/,
        loader: require.resolve("file-loader") + "?name=assets/images/[name].[hash].[ext]"
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap', {
          publicPath: '/'
        })
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      },
      {
        test: /\.scss$/,
        include: helpers.root('src', 'app'),
        loaders: ['to-string', 'css?sourceMap', 'sass?sourceMap']
      },
      {
        test: /\.scss$/,
        include: helpers.root('src', 'assets'),
        loader: ExtractTextPlugin.extract('style', ['to-string', 'css?sourceMap', 'sass?sourceMap'], {
          publicPath: '/'
        })
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new ExtractTextPlugin('assets/stylesheets/[name].[contenthash].css', {'allChunks': true})
  ]
};
