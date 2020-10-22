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
      { fullName && <FullName data={{ fullName }} />}
      { media && <Media data={media} />}
      { general && <General data={general} />}
      { education && <Education data={{ education }} />}
      { skills && <Skills data={{ skills }} />}
      { theatre && <Theatre data={{ theatre }} />}
      { filmography && <Filmography data={{ filmography }} />}
    </GeneralWrapper>
  )
}

const GeneralWrapper = styled.div`
  width: 100%;
  margin: 0 0 64px 0;
`
