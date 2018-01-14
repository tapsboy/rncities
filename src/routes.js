import React, { Component } from 'react'
import {Image} from 'react-native'
import { TabNavigator } from 'react-navigation'

import AddCityTab from './tabs/AddCityTab/AddCityTab'
import CitiesTab from './tabs/CitiesTab/CitiesTab'

import { colors } from './theme'

const routes = {
  AddCity: {
    screen: AddCityTab,
    navigationOptions: {
      tabBarLabel: 'Add City',
      tabBarIcon: (props) => (
        <Image
          source={require('./assets/addicon.png')}
          style={{width: 28, height:28, tintColor: props.tintColor}}
        />
      )
    }
  },
  Cities: {
    screen: CitiesTab,
    navigationOptions: {
      tabBarLabel: 'Cities',
      tabBarIcon: (props) => (
        <Image
          source={require('./assets/cityicon.png')}
          style={{width: 28, height:28, tintColor: props.tintColor}}
        />
      )
    }
  }
}

const routeConfig = {
  initialRouteName: 'Cities',
  order: ['Cities', 'AddCity'],
  tabBarOptions: {
    activeTintColor: colors.primary,
    inactiveTintColor: colors.secondary
  }
}

export default TabNavigator(routes, routeConfig)