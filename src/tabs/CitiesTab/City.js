import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

class City extends Component {

  static navigationOptions = (props) => {
    console.log('navigationOptions', props)
    const city = props.navigation.state.params.city
    return {
      title: `${city.name}, ${city.country}`
    }
  }

  render() {
    console.log('City render')
    const city = this.props.navigation.state.params.city
    return (
      <View>
        <Text>{city.name}</Text>
        <Text>{city.country}</Text>
      </View>
    )
  }
}

const styles = {
  container : {
    flex: 1
  }
}

export default City