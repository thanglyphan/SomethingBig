import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from '../app/store'
import StartScreen from '../app/components/start/InitialUser/StartScreen'

function setup() {
  class Root extends Component {
    render() {
      return (
        <Provider store={store}>
          <StartScreen />
        </Provider>
      )
    }
  }

  return Root
}

module.exports = setup
