import { ApolloClient, InMemoryCache } from 'apollo-client-preset'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import store from './store'

const httpLink = createHttpLink({
  uri: 'http://192.168.10.104:8080/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = AsyncStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

export default new ApolloClient({
  link: authLink.concat(httpLink), //authLink.concat(httpLink)
  cache: new InMemoryCache(),
})