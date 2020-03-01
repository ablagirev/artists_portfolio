export const MAIN = '/'
export const LIST = '/:type'
export const DETAILS = '/:type/:id'
export const ABOUT = '/about'

export const urlMapping = {
  main: MAIN,
  about: ABOUT,
  details: DETAILS,
  list: LIST,
  default: MAIN
}
