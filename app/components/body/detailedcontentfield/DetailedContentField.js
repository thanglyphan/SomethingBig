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

export default class DetailedContentField extends Component {
  borderStyle = {
    borderRightWidth: 1,
    borderColor: this.props.color
  }

  render() {
    return (
      <View style={[styles.container, { borderColor: this.props.color }]}>
        <View style={[styles.wrapper, { borderColor: this.props.color }]}>
          {this.props.data.map((item, key) => (
            <View
              key={key}
              style={[
                styles.contentBox,
                key == this.props.data.length - 1 ? {} : this.borderStyle
              ]}
            >
              {textAppender(styles.text, item.key, 18, 18)}
              {textAppender(styles.text, item.value, 14, 14)}
            </View>
          ))}
        </View>
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
