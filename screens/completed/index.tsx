import React, { FC } from 'react'
import { ICompleted } from './types'
import { Container } from './styles'
import { Text } from '../../components/_shared/text'

const Completed: FC<ICompleted> = ({}) => {
  return (
    <Container>
      <Text>Completed screen</Text>
    </Container>
  )
}
export default Completed
