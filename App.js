import React, { Component } from 'react'
import Routes from './src/routes'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers'

const store =  createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App