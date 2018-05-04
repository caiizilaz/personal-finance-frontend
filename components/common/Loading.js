import React from 'react'
import { Spinner, Container } from 'native-base'
import { StyleSheet } from 'react-native'

const Loading = () =>
  <Container style={styles.container}>
    <Spinner color='blue' />
  </Container>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Loading
