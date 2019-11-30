import { errorLogic } from 'client/errors/logic'
import { artistLogic } from 'client/logic'

export const rootLogic = [
  ...errorLogic,
  ...artistLogic
]
