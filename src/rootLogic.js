import { errorLogic } from 'errors/logic'
import { artistLogic, headerLogic, footerLogic } from 'logic'

export const rootLogic = [...errorLogic, ...artistLogic, ...headerLogic, ...footerLogic]
