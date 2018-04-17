import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native'
import { styles } from './Style'
class FilterHeader extends Component {
  render() {
    return (
      <View style={[styles.filterHeader]} overflow={'visible'}>
        {select(() => this.props.filterEnded(), 'Fjern sluttet')}
        {select(() => this.props.filterCategory(), 'Filtrer kategori')}
        {select(() => this.props.sortAvailable(), 'Mulige')}
        {select(() => this.props.sortDistance(), 'Distanse')}
      </View>
    )
  }
}

const select = (action, text) => {
  return (
    <TouchableHighlight onPress={() => action()}>
      <Text> {text} </Text>
    </TouchableHighlight>
  )
}
export default FilterHeader
