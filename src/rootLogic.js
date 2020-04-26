import { errorLogic } from 'errors/logic'
import { artistLogic, headerLogic, footerLogic, aboutLogic, mainLogic } from 'logic'

export const rootLogic = [...errorLogic, ...artistLogic, ...headerLogic, ...footerLogic, ...aboutLogic, ...mainLogic]
