import { combine } from './webpack.common.babel'
import TerserPlugin from 'terser-webpack-plugin'

const config = {
  mode: 'production',
  plugins: [],
  optimization: {
    runtimeChunk: 'single',
    sideEffects: true,
    usedExports: true,
    nodeEnv: 'production',
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}

module.exports = new Promise((resolve, reject) =>
  combine(resolve, reject, config)
)
