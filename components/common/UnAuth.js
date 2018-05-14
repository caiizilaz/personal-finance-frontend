import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Login from '../home/LoginForm'
import Register from '../home/RegisterForm'

const routes = {
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Register',
    }
  }
}

const routeConfig = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: true,
  }
}

export default createBottomTabNavigator(routes, routeConfig)