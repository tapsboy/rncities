import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'

import { colors } from '../theme'

const Container = ({ children }) => (
  <View
    style={styles.container}>
    {children}
  </View> 
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: colors.primary
  }
})

export default Container