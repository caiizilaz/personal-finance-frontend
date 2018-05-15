import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { AsyncStorage } from 'react-native'

const httpLink = createHttpLink({
  uri: 'http://192.168.10.103:8080/graphql',
})

const authLink = setContext((_, { headers }) => {
  return AsyncStorage.getItem('token').then((value) => {
    return {
      headers: {
        ...headers,
        authorization: value ? `Bearer ${value}` : "",
      }
    }
  })

})

export default new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})