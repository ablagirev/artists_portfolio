import path from 'path'

import webpack from 'webpack'
import ManifestPlugin from 'webpack-manifest-plugin'
import WebpackBar from 'webpackbar'
import merge from 'webpack-merge'

import { clientEntries } from './entries'
import { common } from './common'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const dotenv = require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
})

// eslint-disable-next-line no-console
const env = dotenv ? dotenv.parsed : console.log('ENV IS EMTPY!')
const envKeys = Object.keys(env).reduce((prev, next) => {
  return { ...prev, [`process.env.${next}`]: JSON.stringify(env[next]) }
}, {})

const wdsDevConfig = merge(common, {
  name: 'client',
  devtool: 'cheap-module-source-map',
  mode: 'development',
  entry: clientEntries,
  devServer: {
    contentBase: path.resolve(__dirname, '../'),
    publicPath: '/',
    compress: true,
    port: env.PORT,
    hot: true,
    overlay: true,
    filename: 'bundle.app.js',
    historyApiFallback: { disableDotRule: true },
    /*proxy: [
      {
        context: ['/site2-hot-money', '/site2-payment-adapter', '/site2-uuid-generator'],
        target: env.UMP_SERVICE,
        // pathRewrite: { '/application/api': '' },
        // secure: false,
        logLevel: 'debug',
        changeOrigin: true,
        headers: {
          Connection: 'Keep-Alive'
        }
      },
      {
        context: ['/api/v1/microloan/'],
        target: env.MICROLOAN_SERVICE,
        // pathRewrite: { '/application/api': '' },
        // secure: false,
        logLevel: 'debug',
        changeOrigin: true,
        headers: {
          Connection: 'Keep-Alive'
        }
      }
      /!*{
        '/site2-payment-adapter/': {
          target: env.UMP_SERVICE,
          // pathRewrite: { '/application/api': '' },
          // secure: false,
          logLevel: 'debug',
          changeOrigin: true,
          headers: {
            Connection: 'Keep-Alive'
          }
        }
      }*!/
    ]*/
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      appMountId: env.APP_ID,
      mobile: true,
      // filename: path.resolve(__dirname, '../index.html')
    }),
    new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false }),
    new WebpackBar(),
    /*new ConsulPlugin({
      path: 'ump/portal-frontend/application/UMP_SERVICES_HTTP_URL',
      consul: {
        host: 'consul-ump-dev.mbrd.ru',
        port: 8081,
        defaults: {
          token: '714f6297-1977-cd94-4b69-c437239d64ae'
        }
      }
    }),*/
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ManifestPlugin({ basePath: '/' }),
    new webpack.DefinePlugin(envKeys)
  ]
})

module.exports = wdsDevConfig
