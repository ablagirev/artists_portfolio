import React from 'react'
import styled from 'styled-components'
import { Modal as AntModal } from 'antd'

import { theme } from '../theme'

import { Loader } from './Loader'

export const Modal = ({ children, visible, onCancel, isContentLoaded }) => {
  return (
    <StyledAntModal visible={visible} onCancel={onCancel}>
      {children}
      {isContentLoaded ? null : <Loader color={theme.colors.white} />}
    </StyledAntModal>
  )
}

const StyledAntModal = styled(AntModal)`
  display: flex;
  justify-content: center;
  align-items: center;

  .ant-modal-footer,
  .ant-modal-close {
    display: none;
  }

  .ant-modal-body {
    padding: 0;
  }

  .ant-modal-content {
    box-shadow: none;
    background-color: transparent;
  }
`
