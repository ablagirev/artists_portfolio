import React from 'react'
import styled from 'styled-components'

import { FullName } from './FullName'
import { Media } from './Media'
import { General } from './General'
import { Education } from './Education'
import { Skills } from './Skills'
import { Theatre } from './Theatre'
import { Filmography } from './Filmography'

export const ArtistInfo = ({ data }) => {
  const {
    firstName,
    lastName,
    middleName,
    age,
    height,
    city,
    media,
    education,
    skills,
    theatre,
    filmography
  } = data

  const fullName = `${lastName} ${firstName} ${middleName}`
  const general = { age, height, city }

  return (
    <GeneralWrapper>
      <FullName data={{ fullName }} />
      <Media data={media} />
      <General data={general} />
      <Education data={{ education }} />
      <Skills data={{ skills }} />
      <Theatre data={{ theatre }} />
      <Filmography data={{ filmography }} />
    </GeneralWrapper>
  )
}

const GeneralWrapper = styled.div`
  width: 100%;
  margin: 0 0 64px 0;
`
