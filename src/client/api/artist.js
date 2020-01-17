import axios from 'axios'

import img1 from 'assets/img/1.png'
import img2 from 'assets/img/2.png'
import img3 from 'assets/img/3.png'
import img4 from 'assets/img/4.png'
import img5 from 'assets/img/5.png'
import img6 from 'assets/img/6.png'
import img7 from 'assets/img/7.png'
import img8 from 'assets/img/8.png'
export const getArtistList = () => {
  // return axios.get('/api/artists/')

  return Promise.resolve({
    data: {
      rows: [
        {
          firstName: 'Анастасия',
          lastName: 'Егорова',
          age: 33,
          img: img1
        },
        {
          firstName: 'Ульяна',
          lastName: 'Лисицина',
          age: 25,
          img: img2
        },
        {
          firstName: 'Александра',
          lastName: 'Кузенкина',
          age: 29,
          img: img3
        },
        {
          firstName: 'Мария',
          lastName: 'Волкова',
          age: 34,
          img: img4
        },
        {
          firstName: 'Евгения',
          lastName: 'Гирзекорн',
          age: 33,
          img: img5
        },
        {
          firstName: 'Анастасия',
          lastName: 'Егорова',
          age: 33,
          img: img6
        },
        {
          firstName: 'Нелли',
          lastName: 'Селезнева',
          age: 55,
          img: img7
        },
        {
          firstName: 'Елена',
          lastName: 'Козина',
          age: 32,
          img: img8
        }
      ],
      total: 9
    }
  })
}

export const getArtistDetails = () => {
  return Promise.resolve({
    data: {
      photo: ['path1', 'path2', 'path3'],
      firstName: 'Друзенко',
      lastName: 'Анатолий',
      middleName: 'Павлович',
      age: 27,
      height: 187,
      city: 'Москва/С. Петербугр',
      education: '2009-2014 СПбГАТИ',
      skills: ['права (В)', 'вокал баритон', 'бокс', 'английский(разговорный)', 'легкая атлетика'],
      theatre: [{ year: '2014', name: 'Санкт-Петербургский Молодежный театра на Фонтанке' }],
      filmography: [
        { year: 2019, name: 'Женская версия (в производстве)', role: 'Боря' },
        { year: 2018, name: 'Темная сторона света (в производстве)', role: '' },
        { year: 2018, name: 'Тайны города "ЭН" (в производстве)', role: 'Ваня' },
        { year: 2017, name: 'Шеф. Игра на повышение', role: 'участковый' },
        { year: 2017, name: 'Страх высоты. 20-я серия', role: '' },
        { year: 2017, name: 'Личность не установлена', role: 'санитар' },
        { year: 2017, name: 'Акватория', role: 'Эльдар Шляпин' },
        { year: 2017, name: 'Большая рыба. 12-я серия', role: '' },
        { year: 2016, name: 'Петербург. Только по любви', role: '' },
        { year: 2016, name: 'Утро. История 3-я', role: '' }
      ]
    }
  })
}

export const artistApi = { getArtistList, getArtistDetails }
