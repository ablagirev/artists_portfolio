import path from 'path'
import webpack from 'webpack'
import { combine } from './webpack.common.babel'

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: '/'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
    proxy: {
      /*'/api-ump': {
        target: '/',
        pathRewrite: { '^/api.+?/': '' },
        // secure: false,
        logLevel: 'debug',
        changeOrigin: true,
        headers: {
          Connection: 'Keep-Alive'
        }
      }*/
    }
  }
}

module.exports = new Promise((resolve, reject) =>
  combine(resolve, reject, config)
)
