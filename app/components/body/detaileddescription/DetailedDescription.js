import React, { Component } from 'react'

import {
  ScrollView,
  View,
  Dimensions,
  Image,
  Animated,
  Text
} from 'react-native'
import { styles } from './Style'
import ReadMore from 'react-native-read-more-text'

const TEXT_COLLAPSE_OPTIONS = {
  collapse: false,
  collapseText: '... show more',
  expandText: 'show less',
  minHeight: 70,
  maxHeight: 180
}

export default class DetailedDescription extends Component {
  borderStyle = {
    borderRightWidth: 0.3,
    borderColor: this.props.color
  }

  _renderTruncatedFooter = handlePress => {
    return (
      <Text
        style={[
          styles.text,
          { color: this.props.color, marginTop: 5, opacity: 0.8 }
        ]}
        onPress={handlePress}
      >
        Vis mer
      </Text>
    )
  }

  _renderRevealedFooter = handlePress => {
    return (
      <Text
        style={[
          styles.text,
          { color: this.props.color, marginTop: 5, opacity: 0.8 }
        ]}
        onPress={handlePress}
      >
        Vis mindre
      </Text>
    )
  }

  render() {
    return (
      <View style={[styles.container, { borderColor: this.props.color }]}>
        <View style={styles.headerArea}>
          <Text style={styles.textHeader}>Detaljer</Text>
        </View>

        <ReadMore
          numberOfLines={3}
          renderTruncatedFooter={this._renderTruncatedFooter}
          renderRevealedFooter={this._renderRevealedFooter}
        >
          <Text style={styles.text}>{this.props.text}</Text>
        </ReadMore>
      </View>
    )
  }
}

const textAppender = (style, text, size, lineHeight) => {
  return (
    <Text style={[style, { fontSize: size, lineHeight: lineHeight }]}>
      {text}
    </Text>
  )
}
