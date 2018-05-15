import React from 'react'
import { Container, Content, Text, Button, Card, CardItem, Body, Icon } from 'native-base'
import { Actions } from 'react-native-router-flux';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Content padder contentContainerStyle={{ flex: 1, justifyContent: 'center', backgroundColor: '#E67E22' }}>
          <Card style={{ flex: 0, justifyContent: 'center', minHeight: '50%' }}>
            <CardItem header bordered>
              <Text center>Personal Finance</Text>
            </CardItem>
            <CardItem bordered>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Button full success
                  onPress={() => Actions.LOGIN()}>
                  <Icon name="log-in" />
                  <Text>LogIn</Text>
                </Button>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Button full info
                  onPress={() => Actions.REGISTER()}>
                  <Icon name="person-add" />
                  <Text>Sign Up</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}