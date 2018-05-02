import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { NativeRouter, Switch, Route } from 'react-router-native'
import { View, StyleProvider } from 'native-base'
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import Home from './containers/Home'
import TransactionTypeList from './containers/TransactionTypeList'

export default class App extends React.Component {
  constructor(...args) {
    super(...args)
    this.client = new ApolloClient({
      link: createHttpLink({ uri: 'http://192.168.10.104:8080/graphql' }),
      cache: new InMemoryCache(),
    })
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
          <ApolloProvider client={this.client}>
            <NativeRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/transactiontype" component={TransactionTypeList} />
              </Switch>
            </NativeRouter>
          </ApolloProvider>
        </StyleProvider>
    )
  }
}