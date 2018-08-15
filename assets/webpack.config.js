const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
  VueLoaderPlugin
} = require('vue-loader');
const PATHS = {
  ENTRY: path.resolve(__dirname, 'js/app.js'),
  SRC: path.resolve(__dirname),
  JS: path.resolve(__dirname, 'js/'),
  STATIC: path.resolve(__dirname, '../priv/static/'),
  STATIC_ASSETS: path.resolve(__dirname, 'static/')
};

const WebPack = {
  mode: 'development',
  entry: {
    app: PATHS.ENTRY
  },
  output: {
    filename: 'js/app.bundle.js',
    path: PATHS.STATIC
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      },
    }, {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader?sourceMap',
        'postcss-loader?sourceMap',
        'sass-loader?sourceMap',
      ]
    }, {
      test: /\.vue$/,
      use: 'vue-loader'
    }, {
      test: /\.(png|jpg|gif|ttf|woff2|woff|ico|eot|svg|json|txt)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css[id].css"
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([{
      from: PATHS.STATIC_ASSETS,
      to: PATHS.STATIC
    } ])
  ],
  devtool: 'inline-source-map'
};

module.exports = WebPack;
