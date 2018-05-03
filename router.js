import React from 'react'
import { NativeRouter, Switch, Route } from 'react-router-native'
import Home from './containers/Home'
import TransactionTypeList from './containers/TransactionTypeList'
import LoginForm from './components/home/LoginForm'
import RegisterForm from './components/home/RegisterForm'
import Event from './containers/Event'
import Setting from './containers/Setting'

export default () => (
  <NativeRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/register" component={RegisterForm} />
      <Route exact path="/transactiontype" component={TransactionTypeList} />
      <Route exact path="/event" component={Event} />
      <Route exact path="/setting" component={Setting} />
    </Switch>
  </NativeRouter>
)