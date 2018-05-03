import React from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Icon, Text } from 'native-base';

import HeaderC from '../common/Header'
import FooterC from '../common/Footer'

const RegisterForm = () => (
  <Container>
    <HeaderC title='REGISTER' />
    <Content padder>
      <Form>
        <Item floatingLabel>
          <Label>E-Mail</Label>
          <Input />
        </Item>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
          <Input secureTextEntry={true} />
        </Item>
      </Form>
      <Button full dark style={{ marginTop: 35 }}>
        <Icon name="person-add" />
        <Text>Sign Up</Text>
      </Button>
    </Content>
    <FooterC />
  </Container>
)

export default RegisterForm