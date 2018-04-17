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

export default class DetailedHeaderField extends Component {
  redText = () => {
    return {
      ...styles.textDate,
      color: this.props.color,
      opacity: 0.9
    }
  }

  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.wrapper, { borderColor: this.props.color }]}>
          <View style={[styles.dateBox]}>
            <View style={[styles.textWrapper]}>
              <View style={[styles.textBox]}>
                {textAppender(styles.textDate, this.props.dateFrom, 40, 37)}
                {textAppender(this.redText(), this.props.monthFrom, 25, 24)}
              </View>
              <View style={[styles.textBox]}>
                {textAppender(styles.textDate, this.props.dateTo, 20, 20)}
                {textAppender(styles.textDate, this.props.monthTo, 15, 15)}
              </View>
            </View>
          </View>
          <View
            style={[
              styles.contentBox,
              {
                borderLeftWidth: 1,
                padding: 10,
                borderColor: this.props.color
              }
            ]}
          >
            {textAppender(styles.text, this.props.title, 20, 20)}
            {textAppender(styles.text, this.props.adr, 16, 16)}
          </View>
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
