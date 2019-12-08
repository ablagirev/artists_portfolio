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
        test: /.svg$/,
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
        test: /\.(png|jpg|gif)$/i,
        exclude: ['/node_modules/', '/src/client/assets/favicons/'],
        loader: 'url-loader',
        options: {
          limit: 20000
        }
      },
      {
        test: /\.(png|ico)$/i,
        exclude: ['/node_modules/', '/src/client/assets/img/'],
        loader: 'file-loader',
        options: {
          publicPath: '/',
          name: '[name].[ext]',
          outputPath: 'images',
        }
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: '/',
          outputPath: 'fonts/'
        }
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
