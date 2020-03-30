import React from 'react'

import img from '../assets/img/about/About.png'

import { BaseAboutTemplate } from 'templates'

const data = {
  title: 'Бюро Маши Поповой',
  text:
    'Было основано в 2010 году. Создателем агенства является Маша Попова. С 2018 года совместно с Машей начала сотрудничать Инна Попова. Многолетний опыт работы в киноиндустрии и знание кинопроизводства позволяют агенству работать на высоком уровне. Мы представляем интересы наших талантливых актеров и актрис. Верим в совместное, плодотворное сотрудничество и воплощение самых смелых творческих задач.',
  img,
  breadcrumbs: {
    text: 'Главная',
    url: 'actresse/1',
    nested: {
      text: 'О нас'
    }
  }
}

export const About = () => {
  return <BaseAboutTemplate data={data} />
}
