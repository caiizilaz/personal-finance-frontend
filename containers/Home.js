import React from 'react'
import { Container, Content, Text, Button, H2, Card, CardItem, Body } from 'native-base'
import { StyleSheet } from 'react-native'
import HeaderC from '../components/common/Header'
import FooterC from '../components/common/Footer'

const Home = ({ }) => (
  <Container>
    <HeaderC title='Home'/>
    <Content padder>
      <Card>
        <CardItem header bordered>
          <Text>Personal Finance</Text>
        </CardItem>
        <CardItem bordered>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Button full>
              <Text>LogIn</Text>
            </Button>
          </Body>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Button full info>
              <Text>Sign Up</Text>
            </Button>
          </Body>
        </CardItem>
      </Card>
    </Content>
    <FooterC />
  </Container>
)

const styles = StyleSheet.create({

})

export default Home