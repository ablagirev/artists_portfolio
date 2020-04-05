import path from 'path'
import { DefinePlugin } from 'webpack'
import merge from 'webpack-merge'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { loadConfig } from 'server/app-config-loader'
import { createHtmlWebpackPlugin } from './utils/webpack/HtmlWebpackPluginFactory'

const serviceName = process.env.SERVICE_NAME

const baseConfig = {
  entry: {
    app: './src/index.js'
  },
  output: {
    publicPath: serviceName ? `/${serviceName}` : '',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static'
    })
  ],
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'node_modules/@mtsbank/ui-kit'), path.resolve(__dirname, 'src')],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|svg|jpe?g|yml|ico)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[path][name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            /*options: {
              outputPath: 'fonts',
              name: '[name].[ext]'
            }*/
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  }
}

module.exports.combine = (resolve, reject, config) => {
  loadConfig()
    .then(data => {
      let envKeys = serviceName ? { 'process.env.SERVICE_NAME': JSON.stringify(serviceName) } : {}

      Object.keys(data).forEach(key => {
        envKeys = {
          ...envKeys,
          [`process.env.${key}`]: JSON.stringify(data[key])
        }
      })

      const { mode } = config
      const options = {
        appMountId: data.APP_ID ? data.APP_ID : 'root'
      }

      return resolve(
        merge(baseConfig, config, {
          plugins: [createHtmlWebpackPlugin(mode, options), new DefinePlugin(envKeys)]
        })
      )
    })
    .catch(error => {
      reject(error)
    })
}
