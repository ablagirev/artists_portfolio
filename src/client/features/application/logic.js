import { createLogic } from 'redux-logic'

import { applicationApi } from '../../api/application'

import { applicationActions } from './reducer'

const getAccessToken = createLogic({
  type: applicationActions.getAccessToken().type,
  async process({ action: { payload } }, dispatch, done) {
    try {
      const { hash } = payload
      const {data: response} = await applicationApi.getAccessToken({ hash })
      const {data: {data: accessToken}} = response
      // todo вынести в функцию в utils, установку и получение данных в/из localStorage
      localStorage.setItem('accessToken', accessToken)
      dispatch(applicationActions.getAccessTokenSuccess())
    } catch (error) {
      dispatch(applicationActions.getAccessTokenFail({ error }))
    }
    done()
  }
})

const sendApplication = createLogic({
  type: applicationActions.sendApplication().type,
  async process({ getState, action: { payload } }, dispatch, done) {
    try {
      const { data: formData } = payload

      const state = getState()
      const fio = formData.fio.split('')
      const family = fio[0]
      const name = fio[1]
      const fatherName = fio.length > 2 ? fio[3] : ''

      const addDoc =
        formData.addDocType.value === 'inn'
          ? { selfInn: formData.inn }
          : { snils_number: formData.snilxs }
      /**
       * todo формирование данных к отправке вынести в компонент, где обрабатывается callback формы
       * в идеале все данные должны приходить при submit-е формы
       * привести все названия полей формы к camelCase, для привидения к виду (как сейчас) для бэка
       * реализовать функцию converter, которая будет преобразовывать имена
       */

      const createAddrObj = addr => {
        return {
          addr_zipCode: addr.postal_code,
          addr_countryCode: 643,
          addr_countryName: addr.country,
          addr_regionAreaName: addr.region_with_type,
          addr_regionName: addr.region,
          addr_regionSocr: addr.region_type,
          addr_regionCode: addr.redion_kladr_id,
          addr_citySettlementName: addr.city_with_type,
          addr_cityName: addr.city,
          addr_citySocr: addr.city_type,
          addr_cityCode: addr.city_kladr_id,
          addr_districtName: addr.city_district_with_type,
          addr_districtSocr: addr.city_district_type,
          addr_districtCode: addr.city_district_kladr_id,
          addr_localityName: addr.settelment_with_type,
          addr_localitySocr: addr.settelment_type,
          addr_localityCode: addr.settelment_kladr_id,
          addr_streetUserName: addr.street_with_type,
          addr_streetName: addr.street,
          addr_streetSocr: addr.street_type,
          addr_streetCode: addr.street_kladr_id,
          addr_house: addr.house,
          /*addr_block: addr.block
            ? addr.block.include('стр')
              ? addr.block.split(' стр ')[0]
              : addr.block
            : addr.block,
          addr_building: addr.block
            ? addr.block.include('стр')
              ? addr.block.split(' стр ')[2]
              : ''
            : '',*/
          addr_block: 'block',
          addr_building: 'building',
          addr_flat: addr.flat,
          addr_kladrCode: addr.kladr_id,
          addr_codeOKATO: addr.okato,
          addr_fiasCode: addr.fias_code,
          addr_fiasLevel: addr.fiasLevel
        }
      }
      const renameKeys = obj => {
        const keydata = Object.keys(obj).map(key => {
          const newKey = `actual_${key}`
          return { [newKey]: obj[key] }
        })
        return Object.assign({}, ...keydata)
      }
      const registration = createAddrObj(state.suggestions.selected.registration.data)
      const residence = renameKeys(registration)

      const dataToSend = {
        // token,
        productType: 'CREDIT.MICRO',
        credit_creditPeriod: formData.months,
        receptionWay: formData.delivery,
        name,
        family,
        fatherName,
        clientSex: formData.gender,
        birthDate: formData.birthday,
        birthPlace: formData.birthPlace,
        contact_email: formData.email,
        codeWord: formData.secretWord,
        current_passport: formData.passport,
        issueDate: formData.passIssueDate,
        issueOrgCode: formData.fmsUnitNum,
        issueOrgName: formData.fmsUnitName,
        ...addDoc,
        ...registration,
        ...residence,
        clientWork_activityType: formData.job.value,
        clientWork_activityTypeDetail: formData.job.more ? formData.job.more : '',
        flagAllowPassOthersOrg: formData.dataAgree ? 'Y' : 'N',
        NBCHSendingAllowed: formData.historyAgree ? 'Y' : 'N',
        flag_allow_pass_BKI: formData.historyAgree ? 'Y' : 'N',
        flag_allow_pass_BKI_date: formData.historyAgree ? 'Y' : 'N',
        insuranceShutdown: formData.insuranceAgree ? 'N' : 'Y',
        enable_scoring: {
          juicyscore: 'Y',
          env: false
        }
      }

      const { data: response } =
        (await applicationApi.sendApplication(dataToSend, state.suggestions.selected)) || {}
      const {
        data: { ID: id }
      } = response
      /**
       * todo костыль, который НУЖНО ВЫПИЛИТЬ!!!, когда будет пофиксен бэк
       * бэк возвращает на все запросы статус 200
       */
      if (id) {
        dispatch(applicationActions.sendApplicationSuccess({ id }))
        dispatch(applicationActions.nextStep())
      } else {
        dispatch(applicationActions.sendApplicationFailure())
      }
    } catch (error) {
      dispatch(applicationActions.sendApplicationFailure())
    }
    done()
  }
})
const sendPhotos = createLogic({
  type: applicationActions.sendPhotos().type,
  process({ action: { payload } }, dispatch, done) {
    try {
      const { firstPage, registration, selfie } = payload || {} // todo типы фото (имена полей в форме) возможно нужно вынести в константы

      dispatch(applicationActions.sendFirstPagePhoto({ firstPage }))
      dispatch(applicationActions.sendRegistrationPhoto({ registration }))
      dispatch(applicationActions.sendSelfiePhoto({ selfie }))
    } catch (error) {
      dispatch(applicationActions.sendApplicationFailure())
    }
    done()
  }
})

const sendFirstPagePhoto = createLogic({
  type: applicationActions.sendFirstPagePhoto().type,
  async process({ action: { payload } }, dispatch, done) {
    try {
      const { firstPage } = payload
      const response = await applicationApi.sendPhoto(firstPage)
      dispatch(applicationActions.sendPhotoSuccess())
    } catch (error) {
      dispatch(applicationActions.sendApplicationFailure())
    }
    done()
  }
})

const sendRegistrationPhoto = createLogic({
  type: applicationActions.sendRegistrationPhoto().type,
  async process({ action: { payload } }, dispatch, done) {
    try {
      const { registration } = payload
      const response = await applicationApi.sendPhoto(registration)

      dispatch(applicationActions.sendPhotoSuccess())
    } catch (error) {
      dispatch(applicationActions.sendApplicationFailure())
    }
    done()
  }
})

const sendSelfiePhoto = createLogic({
  type: applicationActions.sendSelfiePhoto().type,
  async process({ action: { payload } }, dispatch, done) {
    try {
      const { selfie } = payload
      const response = await applicationApi.sendPhoto(selfie)
      dispatch(applicationActions.sendPhotoSuccess())
    } catch (error) {
      dispatch(applicationActions.sendApplicationFailure())
    }
    done()
  }
})

export const applicationLogic = [
  sendApplication,
  sendPhotos,
  sendFirstPagePhoto,
  sendRegistrationPhoto,
  sendSelfiePhoto,
  getAccessToken
]
