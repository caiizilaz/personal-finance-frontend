import React from 'react'
import { Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import { Actions } from 'react-native-router-flux'

class HeaderC extends React.Component {

  constructor(props) {
    super(props)
  }

  _logOut = async () => {
    this.props.dispatchLogout()
  }

  render() {
    let { isAuth } = this.props.auth
    return (
      <Header>
        {
          Actions.currentScene === 'LOGIN' || Actions.currentScene === 'REGISTER' ?
            <Left>
              <Button transparent
                onPress={() => Actions.HOME()}>
                <Icon name='arrow-back' />
              </Button>
            </Left> : null
        }
        <Body>
          <Title>{Actions.currentScene.replace('_','')}</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='search' />
          </Button>
          {isAuth ?
            <Button transparent
              onPress={this._logOut}>
              <Text>Logout</Text>
            </Button> : null
          }
        </Right>
      </Header>
    )
  }

}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {
  dispatchLogout: () => logout()
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderC)