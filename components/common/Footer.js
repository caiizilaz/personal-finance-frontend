import React from 'react'
import { Footer, FooterTab, Button, Icon, Text } from 'native-base'
import { Actions } from 'react-native-router-flux';

const FooterC = () => (
  <Footer>
    <FooterTab>
      <Button vertical
        onPress={() => Actions.SETTING()}
        active={Actions.currentScene.replace('_', '') === 'SETTING'}>
        <Icon name="build" />
        <Text>SETTING</Text>
      </Button>
      <Button vertical
        onPress={() => Actions.TRANTYPE()}
        active={Actions.currentScene.replace('_', '') === 'TRANTYPE'}>
        <Icon name="pulse" />
        <Text>TRAN TYPE</Text>
      </Button>
    </FooterTab>
  </Footer>
)
export default FooterC