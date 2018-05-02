import React, { Component } from 'react'
import { Footer, FooterTab, Button, Icon, Text } from 'native-base'
import { withRouter } from 'react-router-native'
const FooterC = ({ history, match }) => (
  <Footer>
    <FooterTab>
      <Button vertical
        onPress={() => history.push("/")}
        active={match.path === '/'}>
        <Icon name="contact" />
        <Text>Login</Text>
      </Button>
      <Button vertical
        onPress={() => history.push("/transactiontype")}
        active={match.path === '/transactiontype'}>
        <Icon name="pulse" />
        <Text>Trans.</Text>
      </Button>
      <Button vertical>
        <Icon name="document" />
        <Text>Event</Text>
      </Button>
      <Button vertical>
        <Icon name="build" />
        <Text>Setting</Text>
      </Button>
    </FooterTab>
  </Footer>
)
export default withRouter(FooterC)