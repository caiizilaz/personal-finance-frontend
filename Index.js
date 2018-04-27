import React, { Component } from 'react'
import { Container } from 'native-base'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import TransactionTypeList from './containers/TransactionTypeList'

export default class componentName extends Component {
  render() {
    return (
      <Container>
        <Header />
        <TransactionTypeList />
        <Footer />
      </Container>
    )
  }
}
