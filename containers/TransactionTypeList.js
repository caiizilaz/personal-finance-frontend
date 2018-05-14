import React from 'react'
import gql from "graphql-tag"
import { StyleSheet } from 'react-native'
import { Container, Segment, Button, Content, Text, ListItem } from 'native-base'
import { graphql, ApolloProvider } from 'react-apollo';
import Loading from '../components/common/Loading'

const TransactionTypeList =
  ({ data: { loading, transactionTypes } }) => (
    loading ? <Loading /> :
      loading === false &&
      <Container>
        <Segment>
          <Button first>
            <Text>INCOME</Text>
          </Button>
          <Button last>
            <Text>EXPENSES</Text>
          </Button>
        </Segment>
        <Content padder>
          {transactionTypes.filter(d => d.is_income).map(d => (
            <ListItem key={d.id}>
              <Text>{d.type_name}</Text>
            </ListItem>
          ))}
          {transactionTypes.filter(d => !d.is_income).map(d => (
            <ListItem key={d.id}>
              <Text>{d.type_name}</Text>
            </ListItem>
          ))}
        </Content>
      </Container>
  )

const transactionTypeQuery = gql`
  query{
  transactionTypes{
    type_name
    is_income
    id
  }
}
`

export default graphql(transactionTypeQuery)(TransactionTypeList);