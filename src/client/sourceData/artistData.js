const Buntina = {
  id: 1,
  photo: { main: 'path', list: ['path1', 'path2', 'path3'] },
  firstName: 'Дарья',
  lastName: 'Бунтина',
  middleName: 'Геннадьевна',
  age: 28,
  height: 171,
  city: 'Москва',
  education: 'РГИСИ',
  skills: [
    { category: 'Языки', value: 'английский разговорный' },
    { category: 'Танец', value: 'современный, классическая хореография' },
    { category: 'Диапазон голоса', value: 'альт' },
    { category: 'Пение', value: 'средне-профессиональный навык' },
    { category: 'Музыкальные инструменты', value: 'гитара, фортепиано самоучка' },
    {
      category: 'Виды спорта',
      value: 'бег, акробатика, смешанные единоборства, танцы, фехтование, верховая езда'
    },
    {
      category: 'Транспортные средства (водительские права)',
      value: 'нет, закончена автошкола, водить умею'
    }
  ],
  theatre: [{ year: '', name: 'Молодежный театр на Фонтанке' }],
  filmography: [
    {
      year: 2019,
      name: 'Последняя точка',
      role: 'влюбленная девушка',
      director: 'Мария Ханафиева'
    },
    { year: 2017, name: 'Детство', role: { name: '', main: false }, director: 'Алина Мустафина' },
    {
      year: 2016,
      name: 'Физика и лирики',
      role: { name: 'Маша', main: false },
      director: 'Александра Субботина'
    }
  ],
  media: {
    showreal: '',
    card: 'https://youtu.be/cQ37dsGyzng',
    artCard: ''
  }
}
const Volkova = {
  id: 2,
  photo: { main: 'path', list: ['path1', 'path2', 'path3'] },
  firstName: 'Мария',
  lastName: 'Волкова',
  middleName: 'Алексеевна',
  age: 34,
  height: 165,
  city: 'Москва',
  education: 'ТИ им. Б.Щукина',
  skills: [
    {
      category: 'Языки',
      value:
        'русский — свободный, английский — разговорный, французский — базовый, испанский — базовый, итальянский — базовый'
    },
    { category: 'Вождение', value: 'автомобиль, мотоцикл' },
    { category: 'Танец', value: 'бальный, народный, модерн, балет' },
    { category: 'Вокал', value: 'оперный, мюзикл, эстрадный, хип-хоп' },
    {
      category: 'Спорт',
      value: 'езда на лошади, фехтование, лыжи, ролики, фигурное катание, йога'
    },
    { category: 'Инструменты', value: 'гитара, фортепиано, флейта, аккордеон' }
  ],
  theatre: [{ year: '', name: 'Театр им.Вахтангова' }],
  filmography: [
    {
      year: 2018,
      name: 'Нянька (в производстве)',
      role: 'Нина Локтева',
      director: 'Сергей Пикалов'
    },
    {
      year: 2017,
      name: 'Склифосовский (6 сезон)',
      role: { name: 'Кристина - бывшая жена Янина', main: false },
      director: 'Юлия Краснова'
    },
    {
      year: 2014,
      name: 'Маскарад (фильм-спектакль)',
      role: { name: 'Нина - жена Арбенина', main: false },
      director: 'Римас Туминас'
    },
    {
      year: 2011,
      name: 'Чужие мечты',
      role: { name: 'Маша Карелина - главная роль медсестра', main: true },
      director: 'Александр Даруга'
    },
    {
      year: 2011,
      name: 'Кодекс чести-5',
      role: { name: 'Таня Зайцева', main: false },
      director: 'Георгий Николаенко'
    },
    {
      year: 2010,
      name: 'В лесах и на горах',
      role: { name: 'Флёнушка - главная роль, внебрачная дочь Манефы', main: true },
      director: 'Александр Холминский'
    },
    {
      year: 2008,
      name: 'Шаг за шагом',
      role: { name: 'Лиза', main: false },
      director: 'Андрей Кузнецов'
    },
    {
      year: 2008,
      name: 'И все-таки я люблю...',
      role: { name: 'Марина', main: false },
      director: 'Сергей Гинзбург'
    }
  ],
  media: {
    showreal: 'https://youtu.be/MMHxeIrjq4Q',
    card: 'https://youtu.be/OlbSSrD1YNs',
    artCard: ''
  }
}

const Egorova = {
  id: 3,
  photo: { main: 'path', list: ['path1', 'path2', 'path3'] },
  firstName: 'Анастасия',
  lastName: 'Егорова',
  middleName: 'Михайловна',
  age: 33,
  height: 164,
  city: 'Москва',
  education: 'РАТИ-ГИТИС',
  skills: [
    {
      category: 'Инструменты',
      value: 'Игра на скрипке и фортепиано - окончила музыкальную школу №14 с отличием, аккордеон'
    },
    {
      category: 'Спорт',
      value: 'Опыт работы на пуантах, спортивная аэробика - 1 место по Москве 2004 год, стэп'
    }
  ],
  theatre: [{ year: '', name: 'Театр Наций' }],
  filmography: [
    {
      year: 2018,
      name: 'Мамы в спорте',
      role: 'Учительница английского языка',
      director: 'Сергей Арланов'
    },
    {
      year: 2017,
      name: 'Пострадавшая',
      role: { name: 'Пострадавшая', main: false },
      director: 'Е. Николаева'
    },
    {
      year: 2016,
      name: 'Доктор Рихтер',
      role: { name: 'Старшая медсестра', main: false },
      director: 'Илья Казанков'
    },
    {
      year: 2015,
      name: 'Голубка',
      role: { name: 'Девушка (короткий метр)', main: false },
      director: 'А. Смирнова'
    },
    {
      year: 2015,
      name: 'Холодное танго',
      role: { name: 'Медсестра', main: false },
      director: 'Павел Чухрай'
    },
    {
      year: 2015,
      name: 'Коллекционер',
      role: { name: 'Она (короткий метр)', main: false },
      director: 'А. Саатчан'
    },
    {
      year: 2015,
      name: 'Я-Эльф',
      role: { name: 'Моранель (короткий метр)', main: false },
      director: 'А. Шалганова'
    },
    {
      year: 2015,
      name: 'Голоса',
      role: { name: 'Девушка (короткий метр)', main: false },
      director: 'Е. Березовская'
    },
    {
      year: 2014,
      name: 'Эти глаза напротив',
      role: { name: 'Переводчица', main: false },
      director: 'Сергей Комаров'
    }
  ],
  media: {
    showreal: 'https://youtu.be/zq5DKge0FOo',
    card: 'https://youtu.be/nQZNq3rhcG0',
    artCard: 'https://youtu.be/5ROJ0G87Hsk'
  }
}

export const data = {
  1: Buntina,
  2: Volkova,
  3: Egorova
}
