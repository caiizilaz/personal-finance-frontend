import React from 'react'
import { Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base'
import { withRouter } from 'react-router-native'
import { getItem, removeItem } from '../../clientStore'

class HeaderC extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isAuth: false
    }
    this.logOut = this.logOut.bind(this)
  }

  async logOut() {
    await removeItem('token')
    const token = await getItem('token')
    this.setState({ isAuth: !!token })
    this.props.history.push("/")
  }

  async componentDidMount() {
    const token = await getItem('token')
    this.setState({ isAuth: !!token })
  }

  render() {
    // const { title, history, auth } = this.props
    const { isAuth } = this.state
    return (
      <Header>
        {/* {title === 'LOGIN' || title === 'REGISTER' ?
          <Left>
            <Button transparent
              onPress={() => history.push("/")}>
              <Icon name='arrow-back' />
            </Button>
          </Left> : null
        }
        <Body>
          <Title>{title}</Title>
        </Body> */}
        <Right>
          <Button transparent>
            <Icon name='search' />
          </Button>
          <Button transparent>
            <Icon name='add' />
          </Button>
          {isAuth &&
            <Button transparent
              onPress={this.logOut}>
              <Text>Logout</Text>
            </Button>
          }
        </Right>
      </Header>
    )
  }

}

export default withRouter(HeaderC)