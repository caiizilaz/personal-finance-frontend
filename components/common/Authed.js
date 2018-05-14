import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

import Setting from '../../containers/Setting'
import TranType from '../../containers/TransactionTypeList'

const routes = {
  Setting: {
    screen: Setting,
    navigationOptions: {
      title: 'Setting',
    }
  },
  TranType: {
    screen: TranType,
    navigationOptions: {
      title: 'TranType',
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