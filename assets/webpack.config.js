const path = require('path');
const glob = require('glob');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, options) => ({
  resolve: {
    alias: {
      react: path.resolve('../elixir_react_render/node_modules/react'),
      'react-dom': path.resolve('../elixir_react_render/node_modules/react-dom')
    }
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: false }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  entry: {
    './js/app.js': ['./js/app.js'].concat(glob.sync('./vendor/**/*.js'))
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../priv/static/js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /^((?!\.?global).)*css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: "css-loader",
            options: {
              modules: true,
              import: true,
              localIdentName: "[path]___[name]__[local]___[hash:base64:5]"
            }
          },
        ]
      },
      {
        test: /\.?global.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'static/', to: '../' }]),
    new MiniCssExtractPlugin({ filename: '../css/app.css' }),
  ]
});
