import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList
} from 'react-native'
import uuidV4 from 'uuid/v4'
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux'

import City from './City'
import CitiesStore from '../../CitiesStore'

class Cities extends Component {
  static  navigationOptions = {
    headerTitle: (
      <Image
        style={{ height: 32, width: 120}}
        source={ require('../../assets/citieslogo.png') }
        resizeMode='contain'
      />
    )
  }

  componentDidMount() {
    CitiesStore.init()
  }

  navigate = (city) => {
    this.props.navigation.navigate('City', {city})
  }

  renderItem = ({item}) => (
    <ListItem
      onPress={() => this.navigate(item)}
      title={item.name}
      subtitle={item.country}
    />
  )
  
  render() {
    const { cities } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          data={cities}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}

const styles = {
  container : {
    flex: 1
  }
}

const mapStatetoProps = (state) => {
  return {
    cities: state.citiesReducer.cities
  }
}

export default connect(mapStatetoProps)(Cities)