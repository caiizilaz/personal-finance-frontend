import React from 'react'
import { Container, Content, Text, Button, Card, CardItem, Body, Icon } from 'native-base'
import HeaderC from '../components/common/Header'
import FooterC from '../components/common/Footer'

const Home = ({ history }) => (
  <Container>
    <HeaderC title='Home' />
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
              onPress={() => history.push("/login")}>
              <Icon name="log-in" />
              <Text>LogIn</Text>
            </Button>
          </Body>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Button full info
              onPress={() => history.push("/register")}>
              <Icon name="person-add" />
              <Text>Sign Up</Text>
            </Button>
          </Body>
        </CardItem>
      </Card>
    </Content>
    <FooterC />
  </Container>
)

export default Home