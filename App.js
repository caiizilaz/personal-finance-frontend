import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Index from './Index'

export default class App extends React.Component {
  constructor(...args) {
    super(...args)
    this.client = new ApolloClient({
      link: createHttpLink({ uri: 'http://192.168.10.104:8080/graphql' }),
      cache: new InMemoryCache(),
    })
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    return (
      this.state.loading ?
        <Expo.AppLoading />
        :
        <ApolloProvider client={this.client}>
          <Index />
        </ApolloProvider>
    )
  }
}