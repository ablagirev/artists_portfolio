import { errorLogic } from 'client/errors/logic'
import { artistLogic, headerLogic, footerLogic } from 'client/logic'

export const rootLogic = [...errorLogic, ...artistLogic, ...headerLogic, ...footerLogic]
