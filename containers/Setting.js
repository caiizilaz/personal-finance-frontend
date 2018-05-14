import React from 'react'
import { Container, Text, Content, Button } from 'native-base'
import { connect } from 'react-redux'
import { logout } from '../actions/auth'
import { removeItem } from '../clientStore'

class Setting extends React.Component {
  constructor(props) {
    super(props)
  }
  _logOut = async () => {
    await removeItem('token')
    this.props.dispatchLogout()
  }
  render() {
    return (
      <Container>
        <Content padder>
          <Text>Setting's Page</Text>
          <Button
            onPress={this._logOut}>
            <Text>Logout</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {
  dispatchLogout: () => logout()
}

export default connect(mapStateToProps, mapDispatchToProps)(Setting)