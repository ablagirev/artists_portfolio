export const paStatusCodes = [
  {
    code: 0,
    name: 'success',
    text: 'Успешно',
    type: 'success'
  },
  {
    code: 10,
    name: 'initial',
    text: 'Заявка ожидает подписания',
    type: 'start'
  },
  {
    code: 11,
    name: 'processing',
    text: 'Loading',
    type: 'loading'
  },
  {
    code: 1,
    name: 'wrongCode',
    header: 'Не удалось выполнить перевод',
    text: 'Введите корректный код',
    type: 'start',
    modal: true
  },

  {
    code: 2,
    name: 'errRegenCode',
    header: 'Техническая ошибка',
    text:
      'Попробуйте еще раз или воспользуйтесь сервисом перевода на сайте Банка после получения номера карты в СМС-сообщении',
    type: 'rejected',
    modal: true
  },
  {
    code: 4,
    name: 'noMoreRegen',
    header: 'Превышено количество попыток ввода кода',
    text:
      'Воспользуйтесь сервисом перевода на сайте Банка после получния номера карты в СМС-сообщении',
    type: 'rejected',
    modal: true
  },
  {
    code: 7,
    name: 'codeExpired',
    header: 'Не удалось выполнить перевод',
    text: 'Получите новый код и попробуйте еще раз',
    type: 'rejected',
    modal: true
  },
  {
    code: 9,
    name: 'wrongParam',
    header: 'Техническая ошибка',
    text:
      'Попробуйте еще раз или воспользуйтесь сервисом перевода на сайте Банка после получения номера карты в СМС-сообщении',
    type: 'rejected',
    modal: true
  },
  {
    code: 12,
    type: 'notFound',
    header: 'Произошла ошибка',
    text: 'Попробуйте повторить запрос позже'
  },
  {
    code: 13,
    name: 'transactionFail',
    header: 'Техническая ошибка',
    text: 'Попробуйте повторить запрос позже',
    type: 'rejected',
    modal: true
  }
]
