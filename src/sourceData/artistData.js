import { buntina } from 'assets/img/buntina'
import { druzenko } from 'assets/img/druzenko'
import { egorova } from 'assets/img/egorova'
import { girzekorn } from 'assets/img/girzekorn'
import { kachnova } from 'assets/img/kachnova'
import { kosmachev } from 'assets/img/kosmachev'
import { kutovaya } from 'assets/img/kutovaya'
import { kuzenkina } from 'assets/img/kuzenkina'
import { lisicina } from 'assets/img/lisicina'
import { malkova } from 'assets/img/malkova'
import { patuev } from 'assets/img/patuev'
import { poshnagov } from 'assets/img/poshnagov'
import { shevchenko } from 'assets/img/shevchenko'
import { terekhov } from 'assets/img/terekhov'
import { vetrov } from 'assets/img/vetrov'
import { vinogradov } from 'assets/img/vinogradov'
import { vladimirov } from 'assets/img/vladimirov'
import { volkova } from 'assets/img/volkova'
import { zharkov } from 'assets/img/zharkov'

export const data = {
  actresses: [
    {
      id: 1,
      gender: 'female',
      photo: buntina,
      firstName: 'Дарья',
      lastName: 'Бунтина',
      middleName: 'Геннадьевна',
      age: { label: 'Возраст', value: 28 },
      height: { label: 'Рост', value: 171 },
      city: { label: 'Город', value: 'Москва' },
      education: { label: 'Образование', value: 'РГИСИ' },
      skills: {
        label: 'Навыки',
        value: [
          { category: 'Языки', value: 'английский разговорный' },
          {
            category: 'Виды спорта',
            value: 'бег, акробатика, смешанные единоборства, танцы, фехтование, верховая езда'
          },
          { category: 'Танец', value: 'современный, классическая хореография' },
          { category: 'Муз. инструменты', value: 'гитара, фортепиано самоучка' },
          { category: 'Пение', value: 'средне-профессиональный навык' },
          { category: 'Тембр', value: 'альт' },
          {
            category: 'Транспорт',
            value: 'нет, закончена автошкола, водить умею'
          }
        ]
      },
      theatre: { label: 'Театр', value: [{ year: '', name: 'Молодежный театр на Фонтанке' }] },
      filmography: {
        label: 'Избранная фильмография',
        value: [
          {
            year: 2019,
            name: 'Последняя точка',
            role: { name: 'Влюбленная девушка', main: false },
            director: 'Мария Ханафиева'
          },
          {
            year: 2017,
            name: 'Детство',
            role: { name: '', main: false },
            director: 'Алина Мустафина'
          },
          {
            year: 2016,
            name: 'Физика и лирики',
            role: { name: 'Маша', main: false },
            director: 'Александра Субботина'
          }
        ]
      },
      media: [
        {
          label: 'Шоурил',
          link: ''
        },
        {
          label: 'Творческая Визитка',
          link: 'cQ37dsGyzng'
        },
        {
          label: 'Визитка',
          link: ''
        }
      ]
    },
    {
      id: 2,
      gender: 'female',
      photo: volkova,
      firstName: 'Мария',
      lastName: 'Волкова',
      middleName: 'Алексеевна',
      age: { label: 'Возраст', value: 34 },
      height: { label: 'Рост', value: 165 },
      city: { label: 'Город', value: 'Москва' },
      education: { label: 'Образование', value: 'ТИ им. Б.Щукина' },
      skills: {
        label: 'Навыки',
        value: [
          {
            category: 'Языки',
            value:
              'Русский — свободный, английский — разговорный, французский — базовый, испанский — базовый, итальянский — базовый'
          },
          {
            category: 'Виды спорта',
            value: 'Езда на лошади, фехтование, лыжи, ролики, фигурное катание, йога'
          },
          { category: 'Танец', value: 'Бальный, народный, модерн, балет' },
          { category: 'Муз. инструменты', value: 'Гитара, фортепиано, флейта, аккордеон' },
          { category: 'Пение', value: 'Оперный, мюзикл, эстрадный, хип-хоп' },
          { category: 'Тембр', value: '' },
          {
            category: 'Транспорт',
            value: 'Автомобиль, мотоцикл'
          }
        ]
      },
      theatre: { label: 'Театр', value: [{ year: '', name: 'Театр им.Вахтангова' }] },
      filmography: {
        label: 'Избранная фильмография',
        value: [
          {
            year: 2018,
            name: 'Нянька (в производстве)',
            role: { name: 'Нина Локтева', main: false },
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
        ]
      },
      media: [
        {
          label: 'Шоурил',
          link: 'MMHxeIrjq4Q'
        },
        {
          label: 'Творческая Визитка',
          link: ''
        },
        {
          label: 'Визитка',
          link: 'OlbSSrD1YNs'
        }
      ]
    },
    {
      id: 3,
      gender: 'female',
      photo: egorova,
      firstName: 'Анастасия',
      lastName: 'Егорова',
      middleName: 'Михайловна',
      age: { label: 'Возраст', value: 33 },
      height: { label: 'Рост', value: 164 },
      city: { label: 'Город', value: 'Москва' },
      education: { label: 'Образование', value: 'РАТИ-ГИТИС' },
      skills: {
        label: 'Навыки',
        value: [
          { category: 'Языки', value: '' },
          {
            category: 'Виды спорта',
            value: 'Опыт работы на пуантах, спортивная аэробика - 1 место по Москве 2004, год, стэп'
          },
          { category: 'Танец', value: '' },
          {
            category: 'Муз. инструменты',
            value: 'Игра на скрипке и фортепиано - окончила музыкальную школу №14 с отличием, аккордеон'
          },
          { category: 'Пение', value: '' },
          { category: 'Тембр', value: '' },
          {
            category: 'Транспорт',
            value: 'Нет, закончена автошкола, водить умею'
          }
        ]
      },
      theatre: { label: 'Театр', value: [{ year: '', name: 'Театр Наций' }] },
      filmography: {
        label: 'Избранная фильмография',
        value: [
          {
            year: 2018,
            name: { name: 'Мамы в спорте', main: false },
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
        ]
      },
      media: [
        {
          label: 'Шоурил',
          link: 'zq5DKge0FOo'
        },
        {
          label: 'Творческая Визитка',
          link: '5ROJ0G87Hsk'
        },
        {
          label: 'Визитка',
          link: 'nQZNq3rhcG0'
        }
      ]
    },
    {
      id: 4,
      gender: 'female',
      photo: girzekorn,
      firstName: 'Евгения',
      lastName: 'Гирзекорн',
      middleName: 'Алексеевна',
      age: { label: 'Возраст', value: 33 },
      height: { label: 'Рост', value: 170 },
      city: { label: 'Город', value: 'Москва' },
      education: { label: 'Образование', value: 'ВТУ им. Б.Щукина (курс В.Поглазова)' },
      skills: {
        label: 'Навыки',
        value: [
          { category: 'Языки', value: 'Английский (базовый)' },
          { category: 'Виды спорта', value: 'Езда на лошади, фехтование' },
          { category: 'Танец', value: 'Бальный, модерн' },
          { category: 'Муз. инструменты', value: 'Фортепиано' },
          { category: 'Пение', value: 'Мюзикл' },
          { category: 'Тембр', value: '' },
          {
            category: 'Транспорт',
            value: 'Автомобиль'
          }
        ]
      },
      theatre: { label: 'Театр', value: [{ year: '', name: '' }] },
      filmography: {
        label: 'Избранная фильмография',
        value: [
          {
            year: 2016,
            name: 'Пятница',
            role: { name: 'Варя', main: false },
            director: 'Евгений Шелякин'
          },
          {
            year: 2016,
            name: 'Возвращение блаженного Августа',
            role: { name: 'Надюша', main: false },
            director: 'Алексей Тагушев'
          },
          {
            year: 2015,
            name: 'Бедные люди',
            role: { name: 'Женя', main: false },
            director: 'Ж.Кадникова'
          },
          {
            year: 2014,
            name: 'Мой любимый папа',
            role: { name: 'Маруся', main: false },
            director: 'Игорь Штернберг'
          },
          {
            year: 2014,
            name: 'Академия',
            role: { name: 'Катя', main: false },
            director: 'Aльманах'
          },
          {
            year: 2014,
            name: 'Саша Таня',
            role: { name: 'Подруга Лили', main: false },
            director: 'Богатырев и Грачева'
          },
          {
            year: 2013,
            name: 'Я буду рядом',
            role: { name: 'Алла', main: false },
            director: 'Павел Игнатов'
          },
          {
            year: 2013,
            name: 'Я не смогу тебя забыть',
            role: { name: 'Катя дочь банкира', main: false },
            director: 'Демченко'
          },
          {
            year: 2012,
            name: 'Поверь все будет хорошо',
            role: { name: 'Ленка', main: false },
            director: 'Бриус'
          },
          {
            year: 2012,
            name: 'Светофор',
            role: { name: 'Ирина секретарша', main: false },
            director: 'Фокин'
          },
          {
            year: 2011,
            name: 'Счастье есть',
            role: { name: 'Яна', main: false },
            director: 'Сорокин'
          },
          {
            year: 2007,
            name: 'Платон - эпизод ',
            role: { name: '', main: false },
            director: 'Вартан Акопян'
          },
          {
            year: 2007,
            name: 'Generation P - эпизод ',
            role: { name: '', main: false },
            director: 'В. Гинзбург'
          }
        ]
      },
      media: [
        {
          label: 'Шоурил',
          link: 'C8iiZHMs1z8'
        },
        {
          label: 'Творческая Визитка',
          link: ''
        },
        {
          label: 'Визитка',
          link: '_N-M8SlSRE4'
        }
      ]
    },
    {
      id: 5,
      gender: 'female',
      photo: kachnova,
      firstName: 'Анастасия',
      lastName: 'Качнова',
      middleName: 'Александровна',
      age: { label: 'Возраст', value: 23 },
      height: { label: 'Рост', value: 165 },
      city: { label: 'Город', value: 'Москва' },
      education: {
        label: 'Образование',
        value: 'Институт Театрального Искусства имени И.Д. Кобзона'
      },
      skills: {
        label: 'Навыки',
        value: [
          { category: 'Языки', value: 'Английский (базовый)' },
          { category: 'Виды спорта', value: '' },
          { category: 'Танец', value: 'Эстрадный' },
          { category: 'Муз. инструменты', value: '' },
          { category: 'Пение', value: 'Базовый' },
          { category: 'Тембр', value: 'Сопрано' },
          {
            category: 'Транспорт',
            value: ''
          }
        ]
      },
      theatre: { label: 'Театр', value: [{ year: '', name: '' }] },
      filmography: {
        label: 'Избранная фильмография',
        value: [
          {
            year: 2019,
            name: 'Отражение',
            role: { name: 'Эпизодическая роль', main: false },
            director: 'Никита Чванов'
          }
        ]
      },
      media: [
        {
          label: 'Шоурил',
          link: ''
        },
        {
          label: 'Творческая Визитка',
          link: 'AcMDVzSdoU0'
        },
        {
          label: 'Визитка',
          link: 'qfwwaGPrPKY'
        }
      ]
    },
    {
      id: 6,
      gender: 'female',
      photo: kuzenkina,
      firstName: 'Александра',
      lastName: 'Кузенкина',
      middleName: 'Андреевна',
      age: { label: 'Возраст', value: 29 },
      height: { label: 'Рост', value: 165 },
      city: { label: 'Город', value: 'Москва' },
      education: { label: 'Образование', value: 'Школа-студия МХАТ' },
      skills: {
        label: 'Навыки',
        value: [
          { category: 'Языки', value: 'Английский - разговорный' },
          { category: 'Виды спорта', value: 'Танец, спортивная' },
          { category: 'Танец', value: 'Базовый ' },
          { category: 'Муз. инструменты', value: '8 лет назад играла на гитаре' },
          { category: 'Пение', value: 'Базовый' },
          { category: 'Тембр', value: 'Ми второй октавы - ми малой октавы; меццо сопрано' },
          {
            category: 'Транспорт',
            value: 'Да, автомат'
          }
        ]
      },
      theatre: { label: 'Театр', value: [{ year: '', name: 'Сатирикон' }] },
      filmography: {
        label: 'Избранная фильмография',
        value: [
          {
            year: 2020,
            name: 'Гранд-3 (в производстве)',
            role: { name: 'Юлия Комиссарова', main: true },
            director: 'Дмитрий Грибанов'
          },
          {
            year: 2019,
            name: 'Отель "Белград" (Hotel Beograd) (Россия, Сербия, в производстве)',
            role: { name: 'Юлия Комиссарова', main: false },
            director: 'Константин Статский'
          },
          {
            year: 2019,
            name: 'Корни (в производстве)',
            role: { name: 'Лилия', main: false },
            director: 'Марк Горобец'
          },
          {
            year: 2019,
            name: 'Нефутбол (в производстве)',
            role: { name: 'Лена', main: false },
            director: 'Максим Свешников'
          },
          {
            year: 2019,
            name: 'Короче',
            role: { name: 'Машка', main: false },
            director: 'Илья Фарфель'
          },
          {
            year: 2018,
            name: 'Гранд',
            role: { name: 'Юлия Комиссарова', main: true },
            director: 'Дмитрий Грибанов'
          },
          {
            year: 2017,
            name: 'Хождение по мукам',
            role: { name: 'Маруся', main: false },
            director: 'Константин Худяков'
          },
          {
            year: 2017,
            name: 'Отель Элеон (все сезоны) (Россия, Украина)',
            role: { name: 'Юлия Комиссарова', main: true },
            director: 'Антон Федотов'
          },
          {
            year: 2015,
            name: 'Окрылённые',
            role: { name: 'Тома', main: false },
            director: 'Анна Писаненко'
          },
          {
            year: 2015,
            name: 'Как я стал русским',
            role: { name: 'Юля - подруга Ани', main: false },
            director: 'Константин Статский'
          },
          {
            year: 2014,
            name: 'СВсё вернётся (Россия, Украина)',
            role: { name: 'Лиля Печёнкина - подруга Натальи', main: false },
            director: 'Алексей Лисовец'
          },
          {
            year: 2013,
            name: 'Студия 17',
            role: { name: 'Ксюха - девушка Пети', main: false },
            director: 'Сергей Сенцов'
          },
          {
            year: 2009,
            name: 'Выхожу тебя искать',
            role: { name: 'Скоморох-девица', main: false },
            director: 'Сергей Попов'
          },
          {
            year: 2006,
            name: 'Громовы - эпизод',
            role: { name: 'Скоморох-девица', main: false },
            director: 'Александр Баранов'
          },
          {
            year: 2003,
            name: 'Полосатое лето',
            role: { name: '', main: false },
            director: 'Елена Цыплакова'
          }
        ]
      },
      media: [
        {
          label: 'Шоурил',
          link: 'E1RlAYhRqrM4rQ'
        },
        {
          label: 'Творческая Визитка',
          link: ''
        },
        {
          label: 'Визитка',
          link: ''
        }
      ]
    },
    {
      id: 7,
      gender: 'female',
      photo: kutovaya,
      firstName: 'Маргарита',
      lastName: 'Кутовая',
      middleName: 'Валерьевна',
      age: { label: 'Возраст', value: 33 },
      height: { label: 'Рост', value: 165 },
      city: { label: 'Город', value: 'Москва' },
      education: { label: 'Образование', value: 'ТИ им. Б.Щукина' },
      skills: {
        label: 'Навыки',
        value: [
          {
            category: 'Языки',
            value: 'Английский - разговорный,французский - базовый, итальянский- базовый'
          },
          { category: 'Виды спорта', value: 'Базовая верховая езда' },
          { category: 'Танец', value: ' ' },
          { category: 'Муз. инструменты', value: '' },
          { category: 'Пение', value: 'Профессионально' },
          { category: 'Тембр', value: '' },
          {
            category: 'Транспорт',
            value: ''
          }
        ]
      },
      theatre: { label: 'Театр', value: [{ year: '', name: '' }] },
      filmography: {
        label: 'Избранная фильмография',
        value: [
          {
            year: 2016,
            name: 'Мой лучший друг',
            role: { name: 'Айнур', main: false },
            director: 'Э.Суни'
          },
          {
            year: 2012,
            name: 'Чужие тайны.Треугольник',
            role: { name: 'Зоя', main: false },
            director: 'Э.Суни'
          },
          {
            year: 2011,
            name: 'Моя вторая половинка',
            role: { name: 'Шама', main: false },
            director: 'Т.Эсадзе'
          },
          {
            year: 2011,
            name: 'Мамочки',
            role: { name: 'Медсестра', main: false },
            director: 'Д.Полторацкая'
          },
          {
            year: 2010,
            name: 'Больше,чем любовь',
            role: { name: 'жена Паустовского', main: false },
            director: 'И.Ушаков'
          },
          {
            year: 2009,
            name: 'След. Анатомия по глюку',
            role: { name: 'Кэт', main: false },
            director: 'В.Аравин'
          },
          {
            year: 2008,
            name: 'Все умрут,а я останусь',
            role: { name: 'старшеклассница', main: false },
            director: 'В.Германика'
          },
          {
            year: 2007,
            name: 'Две сестры',
            role: { name: 'школьницf', main: false },
            director: 'О.Массарыгин'
          }
        ]
      },
      media: [
        {
          label: 'Шоурил',
          link: ''
        },
        {
          label: 'Творческая Визитка',
          link: ''
        },
        {
          label: 'Визитка',
          link: 'IlFkpGjZix4'
        }
      ]
    },
    {
      id: 8,
      gender: 'female',
      photo: lisicina,
      firstName: 'Ульяна',
      lastName: 'Лисицина',
      middleName: 'Степановна',
      age: { label: 'Возраст', value: 25 },
      height: { label: 'Рост', value: 155 },
      city: { label: 'Город', value: 'Москва' },
      education: { label: 'Образование', value: 'ВШСИ К. Райкина' },
      skills: {
        label: 'Навыки',
        value: [
          { category: 'Языки', value: 'Русский — свободный, английский — базовый' },
          { category: 'Виды спорта', value: 'Фехтование, лыжи, ролики, фигурное катание' },
          { category: 'Танец', value: 'Народный, модерн' },
          { category: 'Муз. инструменты', value: 'Гитара' },
          { category: 'Пение', value: 'Эстрадный' },
          { category: 'Тембр', value: '' },
          { category: 'Транспорт', value: 'Автомобиль' }
        ]
      },
      theatre: { label: 'Театр', value: [{ year: '', name: 'Сатирикон' }] },
      filmography: {
        label: 'Избранная фильмография',
        value: [
          {
            year: '',
            name: '',
            role: { name: '', main: false },
            director: ''
          }
        ]
      },
      media: [
        {
          label: 'Шоурил',
          link: ''
        },
        {
          label: 'Творческая Визитка',
          link: 'N41c1gaVCRw'
        },
        {
          label: 'Визитка',
          link: 'gUFsA_m87QM'
        }
      ]
    },
    {
      id: 9,
      gender: 'female',
      photo: malkova,
      firstName: 'Анастасия',
      lastName: 'Малкова',
      middleName: 'Андреевна',
      age: { label: 'Возраст', value: 32 },
      height: { label: 'Рост', value: 172 },
      city: { label: 'Город', value: 'Москва' },
      education: { label: 'Образование', value: 'РУТИ - ГИТИС' },
      skills: {
        label: 'Навыки',
        value: [
          { category: 'Языки', value: '' },
          { category: 'Виды спорта', value: 'Конная езда, лыжи горные' },
          { category: 'Танец', value: 'Модерн (современный танец), балет(стою на пуантах)' },
          { category: 'Муз. инструменты', value: '' },
          { category: 'Пение', value: 'Мюзикл' },
          { category: 'Тембр', value: '' },
          { category: 'Транспорт', value: 'Категория B' }
        ]
      },
      theatre: { label: 'Театр', value: [{ year: '', name: '' }] },
      filmography: {
        label: 'Избранная фильмография',
        value: [
          {
            year: 2016,
            name: 'Спасенная любовь',
            role: { name: 'Аня', main: false },
            director: 'Средникова Наталья'
          },
          {
            year: 2012,
            name: 'Карпов — (эпизод)',
            role: { name: 'Катя', main: false },
            director: 'Игорь Ромашенко, Иван Щеголев'
          }
        ]
      },
      media: [
        {
          label: 'Шоурил',
          link: ''
        },
        {
          label: 'Творческая Визитка',
          link: ''
        },
        {
          label: 'Визитка',
          link: 'QAsDBLSWxHI'
        }
      ]
    }
  ],
  actors: [
    {
      id: 10,
      gender: 'male',
      photo: vetrov,
      firstName: 'Владислав',
      lastName: 'Ветров',
      middleName: 'Владимирович',
      age: { label: 'Возраст', value: 55 },
      height: { label: 'Рост', value: 187 },
      city: { label: 'Город', value: 'Москва' },
      education: { label: 'Образование', value: '' },
      skills: {
        label: 'Навыки',
        value: [
          { category: 'Языки', value: '' },
          { category: 'Виды спорта', value: 'Сценнический бой (базовый)' },
          { category: 'Танец', value: 'Нет, нужен дублер' },
          { category: 'Муз. инструменты', value: '' },
          { category: 'Пение', value: 'Базовый' },
          { category: 'Тембр', value: 'Баритон' },
          { category: 'Транспорт', value: '' }
        ]
      },
      theatre: { label: 'Театр', value: [{ year: '', name: 'Современник' }] },
      filmography: {
        label: 'Избранная фильмография',
        value: [
          {
            year: 2019,
            name: 'Союз Спасения (в производстве)',
            role: { name: 'Густав Гебель', main: false },
            director: 'Андрей Кравчук'
          },
          {
            year: 2019,
            name: 'Один вдох (в производстве)',
            role: { name: 'Врач', main: false },
            director: 'Елена Хазанова'
          },
          {
            year: 2019,
            name: 'Невечерняя (в производстве)',
            role: { name: 'Павлович Чехов', main: true },
            director: 'Марлен Хуциев'
          },
          {
            year: 2018,
            name: 'Юристы',
            role: { name: 'Куницкий', main: true },
            director: 'Павел Игнатов'
          },
          {
            year: 2018,
            name: 'Реставратор',
            role: { name: 'Сергей Михайлович Ревзин - директор детского дома', main: false },
            director: 'Карен Захаров'
          },
          {
            year: 2018,
            name: 'Московские тайны',
            role: { name: 'Сергей Вяземский - отец Насти', main: false },
            director: 'Александр Баршак'
          },
          {
            year: 2018,
            name: 'Молодёжка',
            role: { name: 'Сосед Бакиных - старший прапорщик', main: false },
            director: 'Сергей Арланов'
          },
          {
            year: 2018,
            name: 'Ёлки последние',
            role: { name: 'Отец Гали', main: false },
            director: 'Тимур Бикмамбетов'
          },
          {
            year: 2018,
            name: 'Гранд',
            role: { name: 'Борис Леонидович', main: true },
            director: 'Дмитрий Грибанов'
          },
          {
            year: 2018,
            name: 'Вольная грамота',
            role: { name: 'Алексей Петрович Головин', main: false },
            director: 'Дмитрий Черкасов'
          },
          {
            year: 2018,
            name: 'Бобры',
            role: { name: 'Кругликов - литератор', main: false },
            director: 'Юрий Попович'
          },
          {
            year: 2017,
            name: 'Яблочко от яблоньки',
            role: { name: 'Борис Борисович', main: true },
            director: 'Юрий Морозов'
          },
          {
            year: 2017,
            name: 'Ёлки новые',
            role: { name: 'отец Гали', main: false },
            director: 'Жора Крыжовников'
          },
          {
            year: 2017,
            name: 'Отель Элеон (все сезоны) (Россия, Украина)',
            role: { name: 'Борис Леонидович - главный инженер отеля', main: false },
            director: 'Антон Федотов'
          },
          {
            year: 2015,
            name: 'Я знаю твои секреты',
            role: { name: 'Виктор Вадимыч - патологоанатом', main: false },
            director: 'Андрей Верещагин'
          },
          {
            year: 2015,
            name: 'Самый лучший день!',
            role: { name: 'Викентий Михайлович - ухажер Татьяны', main: false },
            director: 'Жора Крыжовников'
          },
          {
            year: 2015,
            name: 'Метод',
            role: { name: 'Сергей Леонидович Цветков - декан', main: false },
            director: 'Юрий Быков'
          },
          {
            year: 2015,
            name: 'Людмила Гурченко',
            role: { name: 'Владимир Сергеевич - редактор "Комсомольской правды"', main: false },
            director: 'Сергей Алдонин'
          },
          {
            year: 2014,
            name: 'Хорошие руки',
            role: { name: 'Борис Аркадьевич Добровольский - адвокат', main: false },
            director: 'Юрий Кузьменко'
          },
          {
            year: 2014,
            name: 'Уходящая натура',
            role: { name: 'Виктор - художник-постановщик', main: false },
            director: 'Дмитрий Иосифов'
          },
          {
            year: 2014,
            name: 'Обнимая небо',
            role: {
              name: 'Фёдор Николаевич Петрушин - генерал, профессор, отчим Жени Луговой',
              main: false
            },
            director: 'Милена Фадеева'
          },
          {
            year: 2014,
            name: 'Зимы не будет',
            role: { name: 'Арчил', main: false },
            director: 'Илья Демичев'
          },
          {
            year: 2013,
            name: 'Небо падших',
            role: { name: 'Архипов', main: false },
            director: 'Валентин Донсков'
          },
          {
            year: 2013,
            name: 'Нарочно не придумаешь (Беларусь)',
            role: { name: 'Александр Леонидович Велигоров', main: true },
            director: 'Александр Хван'
          },
          {
            year: 2013,
            name: 'Не плачь по мне, Аргентина!',
            role: { name: 'Зам.министра', main: false },
            director: 'Владимир Устюгов'
          },
          {
            year: 2012,
            name: 'Найдёныш-3',
            role: { name: 'Никита Краснов', main: true },
            director: 'Сайдо Курбанов'
          },
          {
            year: 2012,
            name: 'МосГаз',
            role: {
              name: 'Игорь Васильевич Чеботарь - отец Сережи, технолог на ткацкой фабрике',
              main: false
            },
            director: 'Андрей Малюков'
          },
          {
            year: 2012,
            name: 'День Победы (короткометражный)',
            role: { name: 'Оператор', main: false },
            director: 'Игорь Гринякин'
          },
          {
            year: 2012,
            name: 'Гром',
            role: { name: 'Пётр Сергеевич Горчаков - следователь, майор', main: false },
            director: 'Юрий Кузьменко'
          },
          {
            year: 2011,
            name: 'Раскол',
            role: { name: 'Афанасий Ордин', main: false },
            director: 'Николай Досталь'
          },
          {
            year: 2011,
            name: 'Найдёныш-2',
            role: { name: 'Никита Краснов', main: true },
            director: 'Саша Кириенко'
          },
          {
            year: 2011,
            name: '"Кедр" пронзает небо',
            role: { name: 'Марат Васильевич Фуджиев - лейтенант госбезопасности', main: false },
            director: 'Александр Боршак'
          },
          {
            year: 2011,
            name: 'Бабушка на сносях',
            role: { name: 'Антон - муж Любы', main: false },
            director: 'Андрей Селиванов'
          },
          {
            year: 2010,
            name: 'Найдёныш',
            role: { name: 'Никита Краснов', main: true },
            director: 'Саша Кириенко'
          },
          {
            year: 2010,
            name: 'Журов-2',
            role: { name: 'Евгений Дробышев - профессор', main: false },
            director: 'Карен Аганесян'
          },
          {
            year: 2010,
            name: 'Дежурный ангел',
            role: { name: 'Вадим Кондауров - экстрасенс', main: false },
            director: 'Павел Игнатов'
          },
          {
            year: 2010,
            name: 'Гаражи',
            role: { name: 'Петр Васильевич Киреевский', main: false },
            director: 'Юрий Кузьменко'
          },
          {
            year: 2010,
            name: 'Башня',
            role: { name: 'Баташов', main: false },
            director: 'Денис Нейманд'
          },
          {
            year: 2009,
            name: 'Черчилль',
            role: {
              name: 'Вячеслав Витальевич - профессор, бывший сослуживец Светланы',
              main: false
            },
            director: 'Николай Хомерики'
          },
          {
            year: 2009,
            name: 'Рябиновый вальс',
            role: { name: 'Следователь Кириллов', main: false },
            director: 'Алена Райнер'
          },
          {
            year: 2009,
            name: 'Иван Грозный',
            role: { name: 'Василий III Иванович, отец Ивана Грозного', main: true },
            director: 'САндрей Эшпай'
          },
          {
            year: 2009,
            name: 'Адмиралъ (сериал)',
            role: { name: 'Сергей Николаевич Тимирёв - муж Анны Тимирёвой', main: false },
            director: 'Андрей Кравчук'
          },
          {
            year: 2008,
            name: 'Гоголь',
            role: { name: 'Портрет загадочного гения. Гоголь', main: false },
            director: 'Дмитрий Демин'
          },
          {
            year: 2006,
            name: 'Потерянные в раю',
            role: { name: 'Жан', main: false },
            director: 'Сергей Колосов'
          },
          {
            year: 2005,
            name: 'Лебединый рай',
            role: { name: 'Врач-психиатр', main: false },
            director: 'Александр Митта'
          },
          {
            year: 2005,
            name: 'Каменская-4',
            role: { name: 'Руслан Нильский - журналист', main: false },
            director: 'Александр Аравин'
          },
          {
            year: 2005,
            name: 'Даша Васильева. Любительница частного сыска -4',
            role: { name: 'Кабанов', main: false },
            director: 'Игорь Можжухин'
          },
          {
            year: 2005,
            name: 'Голая пионерка (фильм-спектакль)',
            role: { name: 'Генерал Зуков', main: false },
            director: 'Кирилл Серебренников'
          },
          {
            year: 2000,
            name: 'Ростов-папа',
            role: { name: 'Пал Палыч', main: false },
            director: 'Кирилл Серебренников'
          },
          {
            year: 1999,
            name: 'Ласточка',
            role: { name: 'Руководитель оркестра', main: false },
            director: 'Кирилл Серебренников'
          },
          {
            year: 1999,
            name: 'Куба далеко',
            role: { name: '', main: true },
            director: 'Владислав Ветров'
          },
          {
            year: 1997,
            name: 'Таганрога я не миную… (документальный)',
            role: { name: 'А.П. Чехов', main: true },
            director: 'Юрий Лаптев'
          },
          {
            year: 1993,
            name: 'Аз воздам (Белоруссия - Польша)',
            role: { name: 'Казимир Лыщинский', main: true },
            director: 'Борис Степанов'
          },
          {
            year: 1992,
            name: 'Дымъ (Россия, ФРГ)',
            role: { name: 'Григорий Михайлович Литвинов', main: true },
            director: 'Аян Шахмалиева'
          }
        ]
      },
      media: [
        {
          label: 'Шоурил',
          link: ''
        },
        {
          label: 'Творческая Визитка',
          link: ''
        },
        {
          label: 'Визитка',
          link: ''
        }
      ]
    },
    {
      id: 11,
      gender: 'male',
      photo: vinogradov,
      firstName: 'Евгений',
      lastName: 'Виноградов',
      middleName: 'Валериевич',
      age: { label: 'Возраст', value: 27 },
      height: { label: 'Рост', value: 186 },
      city: { label: 'Город', value: 'Москва' },
      education: { label: 'Образование', value: 'РУТИ - ГИТИС' },
      skills: {
        label: 'Навыки',
        value: [
          { category: 'Языки', value: 'Русский — свободный,украинский — разговорный' },
          { category: 'Виды спорта', value: 'Фехтование, лыжи, ролики, футбол, хоккей, баскетбол' },
          { category: 'Танец', value: 'Бальный, народный, модерн' },
          { category: 'Муз. инструменты', value: '' },
          { category: 'Пение', value: 'Мюзикл' },
          { category: 'Тембр', value: '' },
          { category: 'Транспорт', value: 'Автомобиль, мотоцикл' }
        ]
      },
      theatre: { label: 'Театр', value: [{ year: '', name: '' }] },
      filmography: {
        label: 'Избранная фильмография',
        value: [
          {
            year: 2019,
            name: 'Склифосовский',
            role: { name: 'Василий', main: false },
            director: 'Андрей Селиванов, Юлия Краснова'
          },
          {
            year: 2017,
            name: 'Фея',
            role: { name: 'Сотрудник в офисе', main: false },
            director: 'Анна Меликян'
          }
        ]
      },
      media: [
        {
          label: 'Шоурил',
          link: ''
        },
        {
          label: 'Творческая Визитка',
          link: 't5t9afT9_wg'
        },
        {
          label: 'Визитка',
          link: 'B69Hvoz-TO0'
        }
      ]
    },
    {
      id: 12,
      gender: 'male',
      photo: vladimirov,
      firstName: 'Михаил',
      lastName: 'Владимиров',
      middleName: 'Борисович',
      age: { label: 'Возраст', value: 43 },
      height: { label: 'Рост', value: 185 },
      city: { label: 'Город', value: 'Москва' },
      education: { label: 'Образование', value: 'Театральное училище имени Щукина' },
      skills: {
        label: 'Навыки',
        value: [
          { category: 'Языки', value: 'Немецкий (базовый), английский(базовый)' },
          { category: 'Виды спорта', value: 'Фехтование, сцен бой (базовые)' },
          { category: 'Танец', value: '' },
          { category: 'Муз. инструменты', value: '' },
          { category: 'Пение', value: 'Поет' },
          { category: 'Тембр', value: 'Тенор' },
          { category: 'Транспорт', value: 'Автомобили все, мотоцкл, катер, яхта' }
        ]
      },
      theatre: { label: 'Театр', value: [{ year: '', name: 'Театр Сатиры' }] },
      filmography: {
        label: 'Избранная фильмография',
        value: [
          {
            year: 2019,
            name: 'Дама треф',
            role: { name: 'Дмитрий Мотовилов (Мотя) - одноклассник Павла', main: false },
            director: 'Филипп Коршунов'
          },
          {
            year: 2018,
            name: 'Тайный город 4 (в производстве)',
            role: { name: 'Ляпсус', main: false },
            director: 'Артем Мазунов'
          },
          {
            year: 2018,
            name: 'Московская Борзая - 2',
            role: { name: 'Вениамин Александрович Скобельников', main: false },
            director: 'Роман Просвирнин'
          },
          {
            year: 2017,
            name: 'Кровавая барыня',
            role: { name: 'Мансуров', main: false },
            director: 'Егор Анашкин'
          },
          {
            year: 2016,
            name: 'Тайный город 3',
            role: { name: 'Ляпсус', main: false },
            director: 'Артем Мазунов'
          },
          {
            year: 2016,
            name: 'Дух балтийский',
            role: { name: 'Фима', main: false },
            director: 'Александр Поженский'
          },
          {
            year: 2015,
            name: 'Деньги',
            role: { name: 'Безбородко', main: false },
            director: 'Егор Анашкин'
          },
          {
            year: 2014,
            name: 'Хорошие руки',
            role: { name: 'Толик Зазуля', main: false },
            director: 'Юрий Кузьменко'
          },
          {
            year: 2014,
            name: 'Тайный город-2',
            role: { name: 'Ляпсус', main: false },
            director: 'Артем Мазунов'
          },
          {
            year: 2014,
            name: 'Тайный город',
            role: { name: 'Ляпсус', main: false },
            director: 'Артем Мазунов'
          },
          {
            year: 2014,
            name: 'Московская борзая',
            role: { name: 'Вениамин Александрович Скобельников эксперт', main: false },
            director: 'Роман Просвирин'
          },
          {
            year: 2013,
            name: 'Криминальный блюз для саксофона',
            role: { name: 'Животное', main: false },
            director: 'Максим Воронков'
          },
          {
            year: 2013,
            name: 'Папины дочки',
            role: { name: 'Кинорежиссер', main: false },
            director: 'Кирилл Папакуль'
          },
          {
            year: 2012,
            name: 'Мексиканский вояж Степаныча',
            role: { name: 'Сеня', main: false },
            director: 'Максим Воронков'
          },
          {
            year: 2012,
            name: 'Гром',
            role: { name: 'Олег Филатов (Фил)', main: false },
            director: 'Юрий Кузьменко'
          },
          {
            year: 2012,
            name: 'Большая ржака',
            role: { name: 'Эндрю', main: false },
            director: 'Виталий Москаленко'
          },
          {
            year: 2011,
            name: 'Папаши',
            role: { name: 'Борис', main: false },
            director: 'Леонид Мазор'
          },
          {
            year: 2010,
            name: 'Гаражи',
            role: { name: 'Олег', main: false },
            director: 'Юрий Кузьменко'
          },
          {
            year: 2010,
            name: 'Блюз-кафе',
            role: { name: 'роль второго плана', main: false },
            director: 'Алексей Чистиков'
          },
          {
            year: 2010,
            name: 'Аманда О',
            role: { name: 'Серж', main: false },
            director: 'Иван Шурховецкий'
          },
          {
            year: 2010,
            name: 'А мама лучше!',
            role: { name: 'Яша', main: true },
            director: 'Максим Воронков'
          },
          {
            year: 2009,
            name: 'Пелагия и белый бульдог',
            role: { name: 'Пришибякин, ротмистр', main: false },
            director: 'Юрий Мороз'
          },
          {
            year: 2009,
            name: 'Обитаемый остров',
            role: { name: 'Капрал', main: false },
            director: 'Федор Бондарчук'
          },
          {
            year: 2009,
            name: 'Кандагар',
            role: { name: 'Турист', main: false },
            director: 'Андрей Кавун'
          },
          {
            year: 2009,
            name: 'Братья Карамазовы',
            role: { name: 'Фетюкович', main: false },
            director: 'Юрий Мороз'
          },
          {
            year: 2008,
            name: 'Фотограф',
            role: { name: 'Владимир Захарьин', main: false },
            director: 'Ольга Субботина'
          },
          {
            year: 2008,
            name: 'Атлантида',
            role: { name: 'Феликс', main: false },
            director: 'Александр Сухарев'
          },
          {
            year: 2007,
            name: 'Савва Морозов',
            role: { name: 'Адъютант Великого князя', main: false },
            director: 'Олег Сафаралиев'
          },
          {
            year: 2006,
            name: 'Русское средство',
            role: { name: 'Коля Бычко', main: false },
            director: 'Евгений Соколов'
          },
          {
            year: 2006,
            name: 'Испанский вояж Степаныча',
            role: { name: 'Семен', main: false },
            director: 'Максим Воронков'
          },
          {
            year: 2006,
            name: 'Жара',
            role: { name: 'Менеджер кафе', main: false },
            director: 'Ризо Гигинеишвили'
          },
          {
            year: 2005,
            name: '9 рота',
            role: { name: 'Водитель-механик танка', main: false },
            director: 'Федор Бондарчук'
          },
          {
            year: 2005,
            name: 'Точка',
            role: { name: 'Джексон', main: false },
            director: 'Юрий Мороз'
          },
          {
            year: 2005,
            name: 'Тайский вояж Степаныча',
            role: { name: 'Семен', main: true },
            director: 'Максим Воронков'
          },
          {
            year: 2002,
            name: 'Под полярной звездой',
            role: { name: 'Полетов', main: false },
            director: 'Максим Воронков'
          },
          {
            year: 2002,
            name: 'Бригада',
            role: { name: 'Бандит', main: false },
            director: 'Алексей Сидоров'
          },
          {
            year: 2001,
            name: 'Даун Хауз',
            role: { name: 'Ганя Иволгин', main: false },
            director: 'Роман Качанов'
          },
          {
            year: 2000,
            name: 'ДМБ',
            role: { name: 'Старший сержант Лавров', main: false },
            director: 'Роман Качанов'
          }
        ]
      },
      media: [
        {
          label: 'Шоурил',
          link: ''
        },
        {
          label: 'Творческая Визитка',
          link: ''
        },
        {
          label: 'Визитка',
          link: 'ktIsZG7vbX0'
        }
      ]
    },
    {
      id: 13,
      gender: 'male',
      photo: druzenko,
      firstName: 'Анатолий',
      lastName: 'Друзенко',
      middleName: 'Павлович',
      age: { label: 'Возраст', value: 27 },
      height: { label: 'Рост', value: 187 },
      city: { label: 'Город', value: 'Москва/Санкт-Петербург' },
      education: { label: 'Образование', value: 'СПбГАТИ' },
      skills: {
        label: 'Навыки',
        value: [
          { category: 'Языки', value: 'Английский — разговорный' },
          { category: 'Виды спорта', value: 'Бокс,легкая атлетика' },
          { category: 'Танец', value: '' },
          { category: 'Муз. инструменты', value: '' },
          { category: 'Пение', value: 'Поет' },
          { category: 'Тембр', value: 'Баритон' },
          { category: 'Транспорт', value: 'Автомобиль' }
        ]
      },
      theatre: {
        label: 'Театр',
        value: [{ year: '', name: 'Санкт-Петербургский Молодёжный театр на Фонтанке' }]
      },
      filmography: {
        label: 'Избранная фильмография',
        value: [
          {
            year: 2019,
            name: 'Женская версия (в производстве)',
            role: { name: 'Кичин', main: false },
            director: 'Валерия Ивановская'
          },
          {
            year: 2019,
            name: 'Тёмная сторона света',
            role: { name: 'Линьков опер', main: false },
            director: 'Григорий Жихаревич'
          },
          {
            year: 2017,
            name: 'Шеф.Игра на повышение',
            role: { name: 'Участковый', main: false },
            director: 'Олег Ларин, Арменак Назикян'
          },
          {
            year: 2017,
            name: 'Казнить нельзя помиловать',
            role: { name: 'Перебежчик', main: false },
            director: 'Ким Дружинин'
          },
          {
            year: 2017,
            name: 'Акватория',
            role: { name: 'Эльдар Шляпин', main: false },
            director: 'альманах'
          },
          {
            year: 2015,
            name: 'Такая работа',
            role: { name: 'Игорь Гусаров', main: false },
            director: 'альманах'
          },
          {
            year: 2015,
            name: 'Тайны города "ЭН"',
            role: { name: 'Ваня Петушков - стажер', main: false },
            director: 'альманах'
          },
          {
            year: 2015,
            name: 'Один день, одна ночь',
            role: { name: 'Паша - помощник Мишакова', main: false },
            director: 'Пётр Амелин'
          },
          {
            year: 2015,
            name: 'Морские дьяволы. Смерч. Судьбы - 2',
            role: { name: 'Илья Зыков (Дакар)', main: true },
            director: 'альманах'
          },
          {
            year: 2015,
            name: 'Морские дьяволы. Смерч-3',
            role: { name: 'Илья Зыков (Дакар)', main: true },
            director: 'альманах'
          },
          {
            year: 2014,
            name: 'Наставник',
            role: { name: 'Сергей Горшенин - стажер', main: false },
            director: 'Григорий Жихарев'
          },
          {
            year: 2013,
            name: 'Дознаватель-2',
            role: { name: 'Юрик', main: false },
            director: 'Андрей Коршунов'
          }
        ]
      },
      media: [
        {
          label: 'Шоурил',
          link: 'T0qsibJ3Aw8'
        },
        {
          label: 'Творческая Визитка',
          link: '_E-MCFd-NR4'
        },
        {
          label: 'Визитка',
          link: 'FEsC9vbg9uw'
        }
      ]
    },
    {
      id: 14,
      gender: 'male',
      photo: zharkov,
      firstName: 'Павел',
      lastName: 'Жарков',
      middleName: 'Николаевич',
      age: { label: 'Возраст', value: 33 },
      height: { label: 'Рост', value: 177 },
      city: { label: 'Город', value: 'Москва' },
      education: { label: 'Образование', value: 'НГТИ' },
      skills: {
        label: 'Навыки',
        value: [
          { category: 'Языки', value: '' },
          {
            category: 'Виды спорта',
            value: 'Профессиональный тренер по ОФП. Педагог актерского мастерства у детей и подростков'
          },
          { category: 'Танец', value: '' },
          { category: 'Муз. инструменты', value: '' },
          { category: 'Пение', value: '' },
          { category: 'Тембр', value: '' },
          { category: 'Транспорт', value: 'Права категории A,B' }
        ]
      },
      theatre: { label: 'Театр', value: [{ year: '', name: '' }] },
      filmography: {
        label: 'Избранная фильмография',
        value: [
          {
            year: 2014,
            name: 'Всё сначала',
            role: { name: 'Корреспондент', main: false },
            director: 'Дарья Полторацкая'
          },
          {
            year: 2014,
            name: 'Память Сердца',
            role: { name: 'Врач', main: false },
            director: 'Артем Насыбулин'
          },
          {
            year: 2012,
            name: 'Марсианин',
            role: { name: 'Оратор', main: false },
            director: 'Михаил Расходников'
          },
          {
            year: 2012,
            name: 'Оттепель',
            role: { name: 'Милиционер', main: false },
            director: 'Валерий Тодоровский'
          },
          {
            year: 2012,
            name: 'Истребители',
            role: { name: 'Осин', main: false },
            director: 'Алексей Мурадов'
          },
          {
            year: 2012,
            name: 'У Бога свои планы',
            role: { name: 'Менеджер', main: false },
            director: 'Дмитрий Тюрин'
          },
          {
            year: 2011,
            name: 'Охота на крокадилов',
            role: { name: 'Курсант', main: false },
            director: 'Илья Макаров'
          },
          {
            year: 2011,
            name: 'Сердце Марии',
            role: { name: 'Пантелей Почкин', main: false },
            director: 'Артем Насыбули, А. Ручеков, С. Каратаев'
          }
        ]
      },
      media: [
        {
          label: 'Шоурил',
          link: ''
        },
        {
          label: 'Творческая Визитка',
          link: ''
        },
        {
          label: 'Визитка',
          link: 'jKEHc-2YCKk'
        }
      ]
    },
    {
      id: 15,
      gender: 'male',
      photo: kosmachev,
      firstName: 'Александр',
      lastName: 'Космачев',
      middleName: 'Вячеславович',
      age: { label: 'Возраст', value: 29 },
      height: { label: 'Рост', value: 185 },
      city: { label: 'Город', value: 'Москва' },
      education: { label: 'Образование', value: 'ТИ им. Щукина (курс Левицкого А.Ю.)' },
      skills: {
        label: 'Навыки',
        value: [
          {
            category: 'Языки',
            value: 'Английский - средний, Итальянский, Французский - начальный'
          },
          {
            category: 'Виды спорта',
            value:
              'Плавание, хоккей, волейбол, футбол, настольный теннис, ролики, велосипед, бег, тренажёрный зал, дайвинг, рафтинг, верховая езда, скалолазание, стрельба ,пилотирование самолёта'
          },
          {
            category: 'Танец',
            value: 'Бально-спортивный - профессионально , хип-хоп - любитель, мюзикл - профессионально'
          },
          { category: 'Муз. инструменты', value: 'Гитара - начальный' },
          { category: 'Пение', value: 'Мюзикл, эстрада, поп-рок' },
          { category: 'Тембр', value: 'Теонр' },
          { category: 'Транспорт', value: 'Автомобиль механика, автомат (категория B)' }
        ]
      },
      theatre: { label: 'Театр', value: [{ year: '', name: 'театр Алексея Рыбникова' }] },
      filmography: {
        label: 'Избранная фильмография',
        value: [
          {
            year: 2019,
            name: 'Долгий свет маяка',
            role: { name: 'Костя', main: false },
            director: 'Денис Елеонский'
          },
          {
            year: 2018,
            name: 'Полицейский с Рублёвки',
            role: { name: 'Любавин Николай', main: false },
            director: 'Илья Куликов'
          },
          {
            year: 2018,
            name: 'Фитнес',
            role: { name: 'эпизод', main: false },
            director: 'Антон Маслов'
          },
          {
            year: 2018,
            name: 'В отражении тебя',
            role: { name: 'Продавец спорттоваров', main: false },
            director: 'Дмитрий Магонов'
          },
          {
            year: 2016,
            name: 'Восьмидесятые',
            role: { name: 'Студент', main: false },
            director: 'Фокин Роман'
          }
        ]
      },
      media: [
        {
          label: 'Шоурил',
          link: ''
        },
        {
          label: 'Творческая Визитка',
          link: 'Wpou0M_JUj8'
        },
        {
          label: 'Визитка',
          link: 'yVNNnbY4j7I&list'
        }
      ]
    },
    {
      id: 16,
      gender: 'male',
      photo: patuev,
      firstName: 'Никита',
      lastName: 'Патуев',
      middleName: 'Олегович',
      age: { label: 'Возраст', value: 20 },
      height: { label: 'Рост', value: 185 },
      city: { label: 'Город', value: 'Москва' },
      education: { label: 'Образование', value: 'Моcковский театральный колледж Олега Табакова' },
      skills: {
        label: 'Навыки',
        value: [
          { category: 'Языки', value: 'Английский - разговорный' },
          {
            category: 'Виды спорта',
            value: 'Баскетбол, плавание, бокc, футбол, волейбол, настольный теннис'
          },
          { category: 'Танец', value: 'На базе обучения' },
          { category: 'Муз. инструменты', value: 'Гитара' },
          { category: 'Пение', value: 'На базе обучения' },
          { category: 'Тембр', value: 'От низкого до среднего' },
          { category: 'Транспорт', value: 'Велоcипед, водный мотоцикл' }
        ]
      },
      theatre: { label: 'Театр', value: [{ year: '', name: '' }] },
      filmography: {
        label: 'Избранная фильмография',
        value: [
          {
            year: 2019,
            name: 'Большая охота (в производстве)',
            role: { name: 'Доктор', main: false },
            director: 'Екатерина Краснер'
          },
          {
            year: 2019,
            name: 'Оптимисты-2 (в производстве)',
            role: { name: 'Солдат', main: false },
            director: 'Алексей Попогребский'
          },
          {
            year: 2019,
            name: 'Патриот (в производстве)',
            role: { name: 'Пацан', main: false },
            director: 'Николай Бурлак'
          },
          {
            year: 2017,
            name: 'Печень',
            role: { name: 'Алексей', main: false },
            director: 'Иван Снежкин'
          }
        ]
      },
      media: [
        {
          label: 'Шоурил',
          link: ''
        },
        {
          label: 'Творческая Визитка',
          link: ''
        },
        {
          label: 'Визитка',
          link: 'cNK4zYqdHM4'
        }
      ]
    },
    {
      id: 17,
      gender: 'male',
      photo: poshnagov,
      firstName: 'Владислав',
      lastName: 'Пошнагов',
      middleName: 'Александрович',
      age: { label: 'Возраст', value: 22 },
      height: { label: 'Рост', value: 179 },
      city: { label: 'Город', value: 'Москва' },
      education: {
        label: 'Образование',
        value: 'Институт Театрального Искусства имени И.Д. Кобзона'
      },
      skills: {
        label: 'Навыки',
        value: [
          { category: 'Языки', value: 'Английский - базовый, Испанский - начальный' },
          { category: 'Виды спорта', value: 'Лыжный спорт, большой теннис' },
          { category: 'Танец', value: 'Русский-народный, модерн, hip-hop, House' },
          { category: 'Муз. инструменты', value: '' },
          { category: 'Пение', value: 'Профессионал' },
          { category: 'Тембр', value: 'Драматический тенор' },
          { category: 'Транспорт', value: '' }
        ]
      },
      theatre: { label: 'Театр', value: [{ year: '', name: '' }] },
      filmography: {
        label: 'Избранная фильмография',
        value: [
          {
            year: 2019,
            name: 'Отражение',
            role: { name: 'сын', main: false },
            director: 'Никита Чванов'
          },
          {
            year: 2019,
            name: 'Отель Гранд',
            role: { name: 'Белбой', main: false },
            director: 'Дмитрий Грибанов'
          },
          {
            year: 2019,
            name: 'Чернобыль. Бездна (в производстве)',
            role: { name: 'Сеня', main: false },
            director: 'Данила Козловский'
          }
        ]
      },
      media: [
        {
          label: 'Шоурил',
          link: ''
        },
        {
          label: 'Творческая Визитка',
          link: 'fZzpZ6TAPpg'
        },
        {
          label: 'Визитка',
          link: 'tkmgJvRCM9U'
        }
      ]
    },
    {
      id: 18,
      gender: 'male',
      photo: terekhov,
      firstName: 'Алексей',
      lastName: 'Терехов',
      middleName: 'Владимирович',
      age: { label: 'Возраст', value: 30 },
      height: { label: 'Рост', value: 180 },
      city: { label: 'Город', value: 'Москва' },
      education: { label: 'Образование', value: 'ВТУ им. М.С. Щепкина' },
      skills: {
        label: 'Навыки',
        value: [
          { category: 'Языки', value: '' },
          { category: 'Виды спорта', value: '' },
          { category: 'Танец', value: 'Бальные танцы, модерн, джаз, народная хореография' },
          { category: 'Муз. инструменты', value: 'Гитара' },
          { category: 'Пение', value: '' },
          { category: 'Тембр', value: '' },
          { category: 'Транспорт', value: 'Автомобиль права категории B' }
        ]
      },
      theatre: { label: 'Театр', value: [{ year: '', name: '' }] },
      filmography: {
        label: 'Избранная фильмография',
        value: [
          {
            year: 2019,
            name: 'Под прикрытием',
            role: { name: 'Ступин', main: false },
            director: 'Сергей Ткачев'
          },
          {
            year: 2017,
            name: 'Я жив',
            role: { name: 'Стас', main: false },
            director: 'Анарио Мамедов'
          },
          {
            year: 2016,
            name: 'Анна детектив',
            role: { name: 'Боец', main: false },
            director: 'Виталий Бордачев'
          }
        ]
      },
      media: [
        {
          label: 'Шоурил',
          link: ''
        },
        {
          label: 'Творческая Визитка',
          link: ''
        },
        {
          label: 'Визитка',
          link: '7XddFf2H-Zs&list'
        }
      ]
    },
    {
      id: 19,
      gender: 'male',
      photo: shevchenko,
      firstName: 'Данила',
      lastName: 'Шевченко',
      middleName: 'Борисович',
      age: { label: 'Возраст', value: 30 },
      height: { label: 'Рост', value: 178 },
      city: { label: 'Город', value: 'Москва/Санкт-Петербург' },
      education: {
        label: 'Санкт-Петербургская академия театрального искусства (курс В.М.Фильштинского)'
      },
      skills: {
        label: 'Навыки',
        value: [
          { category: 'Языки', value: 'Русский — свободный, английский — базовый' },
          {
            category: 'Виды спорта',
            value: 'Езда на лошади, фехтование, лыжи, ролики, футбол, хоккей, гимнастика, баскетбол'
          },
          { category: 'Танец', value: 'Бальный, народный' },
          { category: 'Муз. инструменты', value: 'Гитара' },
          { category: 'Пение', value: 'Эстрадный' },
          { category: 'Тембр', value: '' },
          { category: 'Транспорт', value: 'Автомобиль, мотоцикл' }
        ]
      },
      theatre: { label: 'Театр', value: [{ year: '', name: 'Практика и Эрмитаж' }] },
      filmography: {
        label: 'Избранная фильмография',
        value: [
          {
            year: 2019,
            name: 'Свадьбы и разводы',
            role: { name: 'Славик', main: false },
            director: 'Вардан Акопян'
          },
          {
            year: 2018,
            name: 'Клиника усыновления (в производстве)',
            role: { name: 'Дима', main: false },
            director: 'Гала Суханова'
          },
          {
            year: 2018,
            name: 'Глаза в глаза (в производстве)',
            role: { name: 'Красновский', main: false },
            director: 'Дмитрий Пантелеев'
          },
          {
            year: 2017,
            name: 'Крым',
            role: { name: 'Веня', main: false },
            director: 'Алексей Пиманов'
          },
          {
            year: 2016,
            name: 'Подлец',
            role: { name: 'Андрюша', main: false },
            director: 'Михаил Левитин мл'
          },
          {
            year: 2016,
            name: 'Мужики и бабы (в производстве)',
            role: { name: 'Саша Скобликов', main: false },
            director: 'Сергей Бобров'
          },
          {
            year: 2016,
            name: 'Провокатор',
            role: { name: 'Андрей', main: false },
            director: 'Станислав Шмелёв'
          },
          {
            year: 2016,
            name: 'Вышибала',
            role: { name: 'Эдик', main: false },
            director: 'Сергей Крутин'
          },
          {
            year: 2015,
            name: 'Фэйк (короткометражный)',
            role: { name: 'Семён', main: false },
            director: ''
          },
          {
            year: 2015,
            name: 'Измены',
            role: { name: 'Менеджер гостиницы на час', main: false },
            director: 'Вадим Перельман'
          },
          {
            year: 2015,
            name: 'Взгляд из прошлого',
            role: { name: 'Борис, бармен', main: false },
            director: 'Анатолий Артамонов'
          },
          {
            year: 2014,
            name: 'Сердце Ангела',
            role: { name: 'Костя Маринин', main: false },
            director: 'Илья Казанков'
          },
          {
            year: 2014,
            name: 'Овечка Долли была злая и рано умерла',
            role: { name: 'Никита', main: true },
            director: 'Алексей Пиманов'
          },
          {
            year: 2014,
            name: 'Московская борзая',
            role: { name: 'Костя Куприянов, хозяин ювелирного магазина', main: false },
            director: 'Роман Просвирнин'
          },
          {
            year: 2014,
            name: 'Дикий-4',
            role: { name: 'Сергей', main: false },
            director: 'Артём Мазунов'
          },
          {
            year: 2014,
            name: 'Выстрел',
            role: { name: 'Сергей Михеев', main: true },
            director: 'Сергей Коротаев'
          },
          {
            year: 2014,
            name: 'Беспокойный участок',
            role: { name: 'Коля Кузнецов, друг Сони', main: false },
            director: 'Сергей Алёшечкин'
          },
          {
            year: 2013,
            name: 'Шерлок Холмс',
            role: { name: 'Артур Уэст клерк канцелярии её величества', main: false },
            director: 'Андрей Кавун'
          },
          {
            year: 2013,
            name: 'Три мушкетёра',
            role: { name: 'Мушкетёр', main: false },
            director: 'Сергей Жигунов'
          },
          {
            year: 2013,
            name: 'Куприн',
            role: { name: 'Крупье', main: false },
            director: 'Влад Фурман'
          },
          {
            year: 2013,
            name: 'Дурная кровь',
            role: { name: 'Адвокат Бульдога', main: false },
            director: 'Сергей Бобров'
          },
          {
            year: 2012,
            name: 'Хвост',
            role: { name: 'Дима Пегов, практикант', main: false },
            director: 'Роман Барабаш'
          },
          {
            year: 2012,
            name: 'Бездна',
            role: { name: 'Дмитрий Синицын', main: false },
            director: 'Дмитрий Петрунь'
          },
          {
            year: 2012,
            name: 'Агент особого назначения-3',
            role: { name: 'эпизод', main: false },
            director: 'Андрей Элинсон'
          },
          {
            year: 2011,
            name: 'Шеф',
            role: { name: 'Кирилл Леонидов, сын телеведущего, наркоман', main: false },
            director: 'Анатолий Артамонов'
          },
          {
            year: 2011,
            name: 'Судьба по имени "Фарманъ" (Россия, Украина)',
            role: { name: 'Марков, прапорщик', main: false },
            director: 'Вячеслав Сорокин'
          },
          {
            year: 2011,
            name: 'Сплит',
            role: { name: 'Олег Фукс', main: false },
            director: 'Влад Ланне'
          },
          {
            year: 2009,
            name: '9 мая. Личное отношение (киноальманах)',
            role: { name: 'Ассистент', main: false },
            director: 'Авдотья Смирнова'
          },
          {
            year: 2005,
            name: 'ОБЖ',
            role: { name: 'Мальчик', main: false },
            director: 'Антон Азаров'
          }
        ]
      },
      media: [
        {
          label: 'Шоурил',
          link: 'dqfYYcj9Dp0'
        },
        {
          label: 'Творческая Визитка',
          link: 'DrYgpcLvqYc'
        },
        {
          label: 'Визитка',
          link: '2brAYS9Rmi0'
        }
      ]
    }
  ]
}

export const randomPhoto = {
  women: [buntina, volkova, egorova, girzekorn, kachnova, kuzenkina, kutovaya, lisicina, malkova],
  men: [vetrov, vinogradov, vladimirov, druzenko, zharkov, kosmachev, patuev, poshnagov, terekhov, shevchenko]
}
