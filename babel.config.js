module.exports = api => {
  api.cache(true)

  const presets = [['@babel/preset-env'], '@babel/preset-react']
  const plugins = ['react-hot-loader/babel', '@babel/plugin-syntax-dynamic-import']

  return {
    presets,
    plugins
  }
}
