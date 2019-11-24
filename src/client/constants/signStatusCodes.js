export const signStatusCodes = [
  {
    code: 0,
    name: 'waitForSign',
    text: 'Заявка ожидает подписания',
    type: 'sign'
  },
  {
    code: 1,
    name: 'waitForNewCode',
    text: 'Запрошена перегенерация кода АСП',
    type: 'loading'
  },
  {
    code: 2,
    name: 'codeSended',
    text: 'Заявка ожидает подписания, перегенерация кода произошла успшено',
    type: 'sign',
    modal: true
  },
  {
    code: 3,
    name: 'signing',
    text: 'Заявка отправлена на подписание',
    type: 'loading'
  },
  {
    code: 404,
    name: 'serverError',
    text: 'Ошибка сервера',
    modal: true
  },
  {
    code: 1000,
    name: 'signed',
    text: 'Заявка успешно подписана',
    type: 'final'
  },
  {
    code: 1001,
    name: 'wrongCodeOrPhone',
    text: 'Телефон/код не соответствуют',
    type: 'sign',
    modal: true
  },
  {
    code: 1002,
    name: 'errRegenCode',
    text: 'Техническая ошибка сервера - не удалось выполниь перегенерацию кода',
    type: 'sign',
    modal: true
  },
  {
    code: 1003,
    name: 'noMoreSign',
    text: 'Превышено количество попыток подписания заявки',
    type: 'final'
  },
  {
    code: 1004,
    name: 'noMoreRegen',
    text: 'Превышено количество запросов на перегенерацию кода',
    type: 'sign',
    modal: true
  },
  {
    code: 1005,
    name: 'requesrClosed',
    text: 'Заявка закрыта',
    type: 'final'
  },
  {
    code: 1006,
    name: 'wrongHash',
    text: 'Хэши документов не совпадают',
    type: 'final'
  },
  {
    code: 1007,
    name: 'codeExpired',
    text: 'Срок действия кода истек',
    type: 'sign',
    modal: true
  },
  {
    code: 1008,
    name: 'moreThenOneReq',
    text: 'Найдено более одной заявки',
    type: 'final'
  },
  {
    code: 1009,
    name: 'notValidParam',
    text: 'Не передан обязательный параметр',
    type: 'final'
  },
  {
    code: 1010,
    name: 'cantFindReq',
    text: 'Не удалось найти заявку',
    type: 'final'
  }
]
