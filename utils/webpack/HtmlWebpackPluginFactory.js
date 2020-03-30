import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import htmlWebpackTemplate from 'html-webpack-template'

const rootPath = process.env.NODE_PATH
const publicPath = process.env.SERVICE_NAME ? `/${process.env.SERVICE_NAME}` : ''
const links = [
  {
    href: `${publicPath}/favicon.ico`,
    rel: 'icon',
    sizes: '16x16',
    type: 'image/x-icon'
  },
  {
    href: `${publicPath}/favicon-16x16.png`,
    rel: 'icon',
    sizes: '16x16',
    type: 'image/png'
  },
  {
    href: `${publicPath}/favicon-32x32.png`,
    rel: 'icon',
    sizes: '32x32',
    type: 'image/png'
  },
  {
    href: `${publicPath}/favicon-96x96.png`,
    rel: 'icon',
    sizes: '96x96',
    type: 'image/png'
  }
]

export const createHtmlWebpackPlugin = (mode, options) => {
  let baseOptions = {
    inject: false,
    template: htmlWebpackTemplate,
    mobile: true,
    links,
    ...options
  }

  if (mode === 'production') {
    const filename = path.resolve(rootPath, 'public/index.html')
    baseOptions = { ...baseOptions, filename }
  }

  return new HtmlWebpackPlugin(baseOptions)
}
