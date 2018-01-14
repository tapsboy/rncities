import React, { Component } from 'react'

import { StackNavigator } from 'react-navigation'

import Cities from './Cities'
import City from './City'

import { colors } from '../../theme'

const routes = {
  Cities: {screen: Cities},
  City: {screen: City}
}

const routeConfig = {
  navigationOptions: {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: colors.primary
    }
  }
}

export default StackNavigator(routes, routeConfig)