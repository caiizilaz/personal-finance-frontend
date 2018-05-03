import React from 'react'
import { Container, Text, Content } from 'native-base'
import HeaderC from '../components/common/Header'
import FooterC from '../components/common/Footer'

const Setting = ({ }) => (
  <Container>
    <HeaderC title='Setting' />
    <Content padder>
      <Text>Setting's Page</Text>
    </Content>
    <FooterC />
  </Container>
)

export default Setting
