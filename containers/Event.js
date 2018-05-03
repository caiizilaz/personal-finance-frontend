import React from 'react'
import { Container, Text, Content } from 'native-base'
import HeaderC from '../components/common/Header'
import FooterC from '../components/common/Footer'

const Event = ({ }) => (
  <Container>
    <HeaderC title='Event' />
    <Content padder>
      <Text>Event's Page</Text>
    </Content>
    <FooterC />
  </Container>
)

export default Event
