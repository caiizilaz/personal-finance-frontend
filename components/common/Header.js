import React from 'react'
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import { withRouter } from 'react-router-native'

const HeaderC = ({ title, history }) => (
  <Header>
    {title === 'LOGIN' || title === 'REGISTER' ?
      <Left>
        <Button transparent
          onPress={() => history.push("/")}>
          <Icon name='arrow-back' />
        </Button>
      </Left> : null
    }
    <Body>
      <Title>{title}</Title>
    </Body>
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

export default withRouter(HeaderC)