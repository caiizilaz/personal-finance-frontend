import React from 'react'
import {
  Container, Content, Form, Item,
  Input, Label, Button, Icon, Text
} from 'native-base'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { connect } from 'react-redux'
import { login } from '../../actions/auth'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: '',
    }
  }

  handleSubmit = async () => {
    this.setState({ error: '' })
    const { username, password } = this.state
    const { data: { loginUser: { token, error } } } =
      await this.props.loginMutation({
        variables: { username, password },
      })
    if (token !== null) {
      this.props.dispatchLogin(token)
    } else {
      this.setState({ error })
    }
  }

  render() {
    const { error } = this.state
    return (
      <Container>
        <Content padder>
          <Form>
            <Item floatingLabel error={error !== ''}>
              <Label>Username</Label>
              <Input name="username"
                onChangeText={(username) => this.setState({ username })}
                value={this.state.username} />
            </Item>
            <Item floatingLabel error={error !== ''}>
              <Label>Password</Label>
              <Input name="password"
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
                secureTextEntry={true} />
            </Item>
          </Form>
          {error !== '' && <Text style={{ marginTop: 15, color: '#d9534f', textAlign: 'center' }}>{error}</Text>}
          <Button onPress={this.handleSubmit} full dark style={{ marginTop: 20 }}>
            <Icon name="log-in" />
            <Text>LogIn</Text>
          </Button>
        </Content>
      </Container>
    )
  }

}

const LOGIN_MUTATION = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(username:$username,password:$password){
      token
      error
    }
  }
`

const LoginFormWithData = graphql(LOGIN_MUTATION, {
  name: 'loginMutation',
})(LoginForm)

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {
  dispatchLogin: (token) => login(token)
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginFormWithData)