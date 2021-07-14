import React, { FC } from 'react'
import { IAll } from './types'
import { Container } from './styles'
import { Text } from '../../components/_shared/text'

const All: FC<IAll> = ({}) => {
  return (
    <Container>
      <Text>All screen</Text>
    </Container>
  )
}
export default All
