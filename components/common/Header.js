import React from 'react'
import { Header, Left, Right, Button, Icon, Title } from 'native-base'
const HeaderC = ({ title }) => (
  <Header>
    <Left>
      <Title>{title}</Title>
    </Left>
    <Right>
      <Button transparent>
        <Icon name='search' />
      </Button>
      <Button transparent>
        <Icon name='add' />
      </Button>
      <Button transparent>
        <Icon name='more' />
      </Button>
    </Right>
  </Header>
)

export default HeaderC