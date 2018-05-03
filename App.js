import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { View, StyleProvider } from 'native-base'
import { AsyncStorage } from 'react-native'
import { Provider } from 'react-redux'

import apolloClient from './apolloClient'
import store from './store'
import Router from './router'
import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'

export default class App extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = { loading: true }
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
    this.setState({ loading: false })
  }

  render() {
    return (
      this.state.loading ?
        <Expo.AppLoading />
        :
        <StyleProvider style={getTheme(material)}>
          <Provider store={store}>
            <ApolloProvider client={apolloClient}>
              <Router />
            </ApolloProvider>
          </Provider>
        </StyleProvider>
    )
  }
}