import React from 'react'
import { Helmet } from 'react-helmet'

export const Seo = () => (
  <Helmet>
    <meta property="og:title" content="Бюро Маши Поповой"/>
    <meta property='og:type' content="article" />
    <meta property='og:site_name' content="bureaump.ru" />
    <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/marias-bureau.appspot.com/o/header%2FlogoMobile.png?alt=media&token=57cb878f-a597-46d7-96b8-0d02d38baa58"/>
  </Helmet>
)
