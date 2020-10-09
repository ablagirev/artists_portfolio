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
    title: 'Marias Bureau',
    mobile: true,
    links,
    ...options,
    meta: [{
      property: 'og:title',
      content: "Бюро Маши Поповой"
    },
    {
      property: 'og:type',
      content: "article"
    },
    {
      property: 'og:site_name',
      content: "bureaump.ru"
    },
    {
      property:"og:description" ,
      content:"Бюро Маши Поповой"
    },
    {
      property: 'og:image',
      content: "https://firebasestorage.googleapis.com/v0/b/marias-bureau.appspot.com/o/header%2FlogoDesktop.png?alt=media&token=64ea61e5-b338-4b97-924c-04aa7c178d99"
    },
    {
      property: 'og:url',
      content: 'https://bureaump.ru/'
    }],
  }

  if (mode === 'production') {
    const filename = path.resolve(rootPath, 'build/index.html')
    baseOptions = { ...baseOptions, filename }
  }

  return new HtmlWebpackPlugin(baseOptions)
}
