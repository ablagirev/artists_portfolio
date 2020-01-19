import path from 'path'

import { aliasConfig } from './aliases'

export const common = {
  context: process.cwd(), // project root
  devtool: 'cheap-module-eval-source-map',
  cache: true,
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../'),
    publicPath: '/',
    filename: 'bundle.[name].js',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: false
            }
          },
          'file-loader'
        ]
      },
      {
        test: /\.(png|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name][hash].[ext]',
              outputPath: 'images'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              sourceMap: true,
              name: '[name].[ext]',
              outputPath: 'fonts'
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    alias: aliasConfig.aliases,
    extensions: ['*', '.js', '.jsx']
  }
}
