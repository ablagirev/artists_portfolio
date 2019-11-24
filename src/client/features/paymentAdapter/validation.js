export const required = value =>
  value && value !== 'false' ? null : 'Это поле обязательно для заполнения'

export const card = value => {
  let sum = 0
  const digits = value.replace(/ /g, '')
  for (let i = 0; i < digits.length; i++) {
    let cardNum = parseInt(digits[i])
    if ((digits.length - i) % 2 === 0) {
      cardNum = cardNum * 2
      if (cardNum > 9) {
        cardNum = cardNum - 9
      }
    }
    sum += cardNum
  }
  return digits.length === 16 && sum % 10 === 0 ? null : 'Введен некорректный номер карты'
}
export const code = value => {
  return value.length < 4 ? 'err' : null
}
