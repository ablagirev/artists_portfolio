import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import htmlWebpackTemplate from 'html-webpack-template'

const rootPath = process.env.NODE_PATH
const publicPath = process.env.SERVICE_NAME ? `/${process.env.SERVICE_NAME}` : ''
const faviconPath ='https://firebasestorage.googleapis.com/v0/b/marias-bureau.appspot.com/o/favicons%2Fapple-touch-icon.png?alt=media&token=b0a5b736-fc36-440c-9f1c-b6d483d82164'
const links = [
  {
    href: faviconPath,
    rel: 'shortcut icon',
    type: 'image/x-icon'
  },
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
      name:"description",
      content: "Мы представляем интересы наших талантливых актеров и актрис. Верим в совместное, плодотворное сотрудничество и воплощение самых смелых творческих задач."
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
