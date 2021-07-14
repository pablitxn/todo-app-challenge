import React, { FC } from 'react'
import { IText } from './types'
import { StyledText, StyledTitle } from './styles'

export const Text: FC<IText> = ({ children }) => {
  return <StyledText>{children}</StyledText>
}

export const Title: FC<IText> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}
