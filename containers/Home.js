import React from 'react'
import { Container, Content, Text, Button, Card, CardItem, Body, Icon } from 'native-base'
import { getItem } from '../clientStore'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this._loadInitialState().done
  }
  _loadInitialState = async () => {
    let value = await getItem('token')
    if (value !== null) {
      this.props.navigation.navigate('Setting')
    }
  }
  render() {
    const { navigation } = this.props
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Personal Finance</Text>
            </CardItem>
            <CardItem bordered>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Button full success
                  onPress={() => navigation.navigate('Login')}>
                  <Icon name="log-in" />
                  <Text>LogIn</Text>
                </Button>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Button full info
                  onPress={() => navigation.navigate('Register')}>
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