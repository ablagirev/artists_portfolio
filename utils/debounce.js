export const debounce = (fn, delay) => {
  let previousCall
  let lastCall
  let timerId

  return args => {
    previousCall = lastCall
    lastCall = Date.now()

    if (previousCall && lastCall - previousCall <= delay) {
      clearTimeout(timerId)
    }

    timerId = setTimeout(() => fn(args), delay)
  }
}
