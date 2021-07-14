import React, { FC } from 'react'
import { IUncompleted } from './types'
import { Container } from './styles'
import Text from '../../components/_shared/text'

const Uncompleted: FC<IUncompleted> = ({}) => {
  return (
    <Container>
      <Text>Uncompleted screen</Text>
    </Container>
  )
}
export default Uncompleted
