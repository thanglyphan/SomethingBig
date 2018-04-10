import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native'
import { styles } from './Style'
class Header extends Component {
  toggleScreen = screenId => {
    this.props.navigate.navigate(screenId)
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.box}>
          <TouchableHighlight
            style={[styles.button, styles.btnLeft]}
            onPress={() => this.toggleScreen('Map')}
          >
            <Text>yoo</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.btnRight]}
            onPress={() => this.toggleScreen('Main')}
          >
            <Text>yoo</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

export default Header
