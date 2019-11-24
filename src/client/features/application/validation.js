import dayjs from 'dayjs'
const isEmpty = value => {
  return !value || (typeof value === 'object' && Object.keys(value).length === 0)
}

export const required = value => {
  const message = 'Это поле обязательно для заполнения'

  return isEmpty(value) ? message : null
}

export const requiredFalse = value => (!value || value === 'false' ? null : 'error')

export const passNumbers = value =>
  value && !/^([0-9]){4} ([0-9]){6}$/.test(value) ? 'Введите номер полностью' : null

export const passUnitNum = value =>
  value && !/^([0-9]){3}-([0-9]){3}$/.test(value) ? 'Введите код полностью' : null

export const passIssueDate = value => {
  if (value.includes('_')) {
    return 'Введите верную дату'
  } else return null
}
export const russianLetters = value => {
  const regex = new RegExp('^([ ]|[а-яёЁА-Я])+$')
  return !regex.test(String(value).toLowerCase()) ? 'Введите значение на русском языке' : null
}
export const russianLettersAndNumbers = value => {
  const regex = new RegExp('^([ ][0-9]|[а-яёЁА-Я., ])+$')
  return !regex.test(String(value).toLowerCase()) ? 'Введите значение на русском языке' : null
}
export const name = value => {
  return value && !/^.+\s.+\s?.*$/.test(value) ? 'Введите ФИО полностью' : null
}

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Введите верный эл.адрес'
    : null

export const birthday = value => {
  if (!value) {
    return 'Это поле обязательно для заполнения'
  } else {
    if (value.includes('_')) {
      return 'Введите верную дату'
    } else {
      const date = new Date(
        parseInt(value.split('.')[2]),
        parseInt(value.split('.')[1]) - 1,
        parseInt(value.split('.')[0])
      )
      const age = calculateAge(date)
      if (age < 18) {
        return 'Вы должны быть старше 18 лет'
      }
      if (age > 118) {
        return 'Введите верную дату'
      } else return null
    }
  }
}
export const passportDate = (value, allValues) => {
  if (!value) {
    return 'Это поле обязательно для заполнения'
  } else {
    if (value.includes('_') || value.length < 10) {
      return 'Введите верную дату'
    } else {
      const issueDate = dayjs(
        new Date(
          parseInt(value.split('.')[2]),
          parseInt(value.split('.')[1]) - 1,
          parseInt(value.split('.')[0])
        )
      )
      let isValid = false
      let errorMessage = ''
      const birthDate = dayjs(
        new Date(
          parseInt(allValues.birthday.split('.')[2]),
          parseInt(allValues.birthday.split('.')[1]) - 1,
          parseInt(allValues.birthday.split('.')[0])
        )
      )
      const diff = issueDate.diff(birthDate, 'year', true)
      const age = dayjs(new Date()).year() - birthDate.year()
      const condition45 = age >= 45 && diff >= 45
      const condition20 = age >= 20 && age <= 44 && diff >= 20
      const condition1419 = age >= 14 && age <= 19 && diff >= 14 && diff <= 18

      if (!value) {
        isValid = false
      } else if (condition1419 || condition20 || condition45) {
        isValid = true
      } else {
        if (age >= 14 && age < 20) {
          errorMessage = 'Требуются данные паспорта, выданного вам при достижении 14 лет'
        }
        if (age >= 20 && age < 45) {
          errorMessage =
            'Данные устарели. Требуются данные паспорта, выданного вам при достижении 20 лет'
        }
        if (age >= 45) {
          errorMessage =
            'Данные устарели. Требуются данные паспорта, выданного вам при достижении 45 лет'
        }

        isValid = false
      }

      return isValid ? null : errorMessage
    }
  }
}

export const address = (value, suggestion) => {
  if (!value) {
    return 'Введите адрес'
  } else {
    if (!suggestion.house || !suggestion.fias_id) {
      return 'Адрес не обнаружен.Выберите адрес из списка подсказок и укажите до дома'
    } else {
      return null
    }
  }
}
const calculateAge = birthday => {
  const diff = Date.now() - birthday.getTime()
  const age = new Date(diff)
  return Math.abs(age.getUTCFullYear() - 1970)
}
