import React, { FC } from 'react'
import { IText } from './types'
import StyledText from './styles'

const Text: FC<IText> = ({ children }) => {
  return <StyledText>{children}</StyledText>
}

export default Text
