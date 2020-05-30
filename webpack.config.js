const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
      port: 9000
    },
    resolve: {
        extensions: ['*', '.mjs', '.js', '.svelte','jpg','svg']
    },
    module: {
        rules: [
            {
              test: /\.js?$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader'
              }
            },
         {
          test: /\.png|svg|jpg|gif|png|mp4$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 9000000,
            }
          }
        },
           {
              test: /\.svelte$/,
              exclude: /node_modules/,
              use: {
                loader: 'svelte-loader'
              }
            }
          ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          inject: true,
          template: './public/index.html',
          filename: './index.html'
        })
      ]
}