import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
} from 'react-native'
import  { connect } from 'react-redux'
import { Button } from 'react-native-elements'

import Container from '../../components/container'
import logoImage from '../../assets/citieslogo.png'
import { addCity } from '../../actions/citiesAction'

const deviceInfo = Dimensions.get('window')

class AddCityTab extends Component {

  state = {
    name: '',
    country: ''
  }

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  submitForm = () => {
    console.log('submit1');
    if (this.state.city === ''|| this.state.country === '') {
      return
    }
    this.props.dispatch(addCity(this.state))
    
    this.setState({
      name: '',
      country: ''
    })
    this.props.navigation.navigate('Cities');
  }

  render() {
    return (
      <Container>
        <Image
          resizeMode='contain'
          source={logoImage}
          style={{maxHeight: 36, width: deviceInfo.width}}
        />
        <TextInput
          placeholder='City Name'
          onChangeText={
            (value) => this.onChangeText('name', value)
          }
          style={styles.input}
          />
        <TextInput
          placeholder='Country Name'
          onChangeText={
            (value) => this.onChangeText('country', value)
          }
          style={styles.input}
        />
        <Button
          title="Submit"
          onPress={this.submitForm}
          containerViewStyle={{ marginTop: 10}}
        />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    backgroundColor: 'white',
    padding: 8,
    marginTop: 8,
    marginHorizontal: 8
  }
})

export default connect()(AddCityTab)