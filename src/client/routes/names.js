export const MAIN = '/'
export const LIST = '/list/:type'
export const DETAILS = '/artists/:id'
export const ABOUT = '/about'

export const urlMapping = {
  main: MAIN,
  about: ABOUT,
  details: DETAILS,
  list: LIST,
  default: MAIN
}
