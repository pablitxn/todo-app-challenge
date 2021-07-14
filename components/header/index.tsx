import React, { FC } from 'react'
import { Container, ContainerIcons, TouchableOpacity } from './styles'
import { Title } from '../_shared/text'
import { Bell, Search, Menu } from 'react-feather'

const Header: FC = () => {
  const handlePress = () => {}

  return (
    <Container>
      <Title>Board</Title>

      <ContainerIcons>
        <TouchableOpacity onPress={handlePress}>
          <Search />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}>
          <Bell />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}>
          <Menu />
        </TouchableOpacity>
      </ContainerIcons>
    </Container>
  )
}
export default Header
