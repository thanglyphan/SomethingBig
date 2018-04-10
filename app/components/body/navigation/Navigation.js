import React, { Component } from 'react'
import { Animated, Easing } from 'react-native'

import { StackNavigator, TabNavigator } from 'react-navigation'
import Main from '../main/Main'

import Map from '../map/Map'
import Splash from '../../start/Splash/Splash'

import Header from '../header/Header'

const state = {
  fadeAnim: new Animated.Value(0) // Initial value for opacity: 0
}

const fade = props => {
  const { position, scene } = props
  const index = scene.index
  const translateX = 0
  const translateY = 0

  const opacity = position.interpolate({
    inputRange: [index - 0.9, index, index + 0.9],
    outputRange: [0.3, 1, 0.3]
  })

  return {
    opacity,
    transform: [{ translateX }, { translateY }]
  }
}

const Navigation = StackNavigator(
  {
    // Splash: { screen: Splash },
    // Map: { screen: Map },
    Main: { screen: Main }
  },
  {
    animationEnabled: false,
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      header: <Header navigate={navigation} />
    }),
    transitionConfig: () => ({
      screenInterpolator: props => {
        return fade(props)
      }
    })
  }
)

export default Navigation
