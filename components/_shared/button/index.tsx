import React, { FC } from 'react'
import { IButton } from './types'
import StyledButton from './styles'

const Button: FC<IButton> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}

export default Button
