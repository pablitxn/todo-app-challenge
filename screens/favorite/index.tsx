import React, { FC } from 'react'
import { IFavorite } from './types'
import { Container } from './styles'
import { Text } from '../../components/_shared/text'

const Favorite: FC<IFavorite> = ({}) => {
  return (
    <Container>
      <Text>Favorite screen</Text>
    </Container>
  )
}
export default Favorite
