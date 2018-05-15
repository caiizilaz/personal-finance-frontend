import React from 'react'
import { Router, Scene } from "react-native-router-flux"
import { AsyncStorage } from "react-native"
import { connect } from 'react-redux'
import { auth } from './actions/auth'
import Home from './containers/Home'
import Setting from './containers/Setting'
import Login from './components/home/LoginForm'
import Register from './components/home/RegisterForm'
import TranType from './containers/TransactionTypeList'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

const RouterWithRedux = connect()(Router)

class Root extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      token: null,
      isStorageLoaded: false
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('token').then((token) => {
      token ? this.props.dispatchAuth(token) : null
      this.setState({
        token: token !== null,
        isStorageLoaded: true
      })
    })
  }

  render() {
    let { isAuth } = this.props.auth
    let { token, isStorageLoaded } = this.state
    if (!isStorageLoaded) {
      return (
        <Expo.AppLoading />
      )
    } else {
      return (
        <RouterWithRedux>
          <Scene key='root' hideNavBar={true}>
            <Scene key='auth'
              initial={!token || !isAuth}>
              <Scene
                component={Home}
                hideNavBar={true}
                key='HOME'
              />
              <Scene
                component={Login}
                back
                key='LOGIN'
              />
              <Scene
                component={Register}
                back
                key='REGISTER'
              />
            </Scene>
            <Scene key="main" tabs tabBarPosition="bottom" tabBarComponent={Footer}
              initial={token || isAuth}>
              <Scene
                component={Setting}
                navBar={Header}
                key='SETTING'
                title='SETTING'
              />
              <Scene
                component={TranType}
                navBar={Header}
                key='TRANTYPE'
                title='TRAN TYPE'
              />
            </Scene>
          </Scene>
        </RouterWithRedux>
      )
    }
  }
}


const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {
  dispatchAuth: (token) => auth(token)
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)