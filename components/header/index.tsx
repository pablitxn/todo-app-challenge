import React, { FC } from 'react'
import { IHeader } from './types'
import { Container, TouchableOpacity } from './styles'
import Text from '../_shared/text'
import { Bell, Search, Menu } from 'react-feather'

const Header: FC<IHeader> = ({ path }) => {
  const handlePress = () => {}

  return (
    <Container>
      <Container>
        <Text>Board</Text>
      </Container>

      <Container>
        <TouchableOpacity onPress={handlePress}>
          <Search />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}>
          <Bell />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}>
          <Menu />
        </TouchableOpacity>
      </Container>
    </Container>
  )
}
export default Header
