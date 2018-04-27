import React from 'react'
import gql from "graphql-tag"
import { StyleSheet } from 'react-native'
import { Container, Spinner, Segment, Button, Content, Text, ListItem } from 'native-base'
import { graphql, ApolloProvider } from 'react-apollo';

const TransactionTypeList =
  ({ data: { loading, transactionTypes } }) => (
    loading ?
      <Container style={styles.container}>
        <Spinner color='blue' />
      </Container>
      :
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



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

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