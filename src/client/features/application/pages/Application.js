import React, { useCallback, useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { applicationActions } from '../reducer'

export const Application = () => {
  const mapState = useCallback(state => ({
    data: state
  }))

  const { data } = useSelector(mapState)
  console.log(data)
  const dispatch = useDispatch()
  const { hash } = useParams()

  useEffect(() => {
    dispatch(applicationActions.getAccessToken({ hash }))
  }, [])

  const nextStep = e => {
    e.preventDefault()
    dispatch(applicationActions.nextStep())
  }
  const previousStep = e => {
    e.preventDefault()
    dispatch(applicationActions.previousStep())
  }
  const hideModal = () => dispatch(applicationActions.hideModal())
  const showModal = type => dispatch(applicationActions.showModal(type))
  const sendPhotos = data => {
    let dataToSend = {}

    for (const type in data) {
      const formData = new FormData()
      formData.append('id', id)

      for (const fieldName in data[type]) {
        formData.append(fieldName, data[type][fieldName])
      }

      dataToSend = { ...dataToSend, [type]: formData }
    }

    dispatch(applicationActions.sendPhotos(dataToSend))
  }
  const sendApplication = data => {
    dispatch(applicationActions.sendApplication({ data }))
  }

  // todo реализовать стратегию по рендеру данных
  return (
    <React.Fragment>
      {loading ? (
        <Loading show={loading} />
      ) : photoSent ? (
        <Accepted />
      ) : (
        <Form
          step={step}
          modal={modal}
          nextStep={nextStep}
          previousStep={previousStep}
          hideModal={hideModal}
          showModal={showModal}
          sendPhotos={sendPhotos}
          sendApplication={sendApplication}
        />
      )}
    </React.Fragment>
  )
}
