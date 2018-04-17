import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text, View, TouchableHighlight } from 'react-native'
import {
  styles,
  txtHeader,
  txtPrimary,
  wrapperStyle,
  seperator,
  location,
  rightLowerContentBox
} from './Style'
import color from '../../../assets/color'
import {
  DateDay,
  DateMonth,
  Today,
  Category,
  Distance,
  DateNames
} from '../../../mockups/DataConverter'
import { event } from '../../../actions/event'
import Icon from 'react-native-vector-icons/Ionicons'
class EventCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      radius: props.sectionId == 0 ? 7 : 0
    }
  }

  dateFrom = () => {
    return DateDay(this.props.data.dateFrom)
  }

  dateTo = () => {
    return '-' + DateDay(this.props.data.dateTo)
  }

  month = isFromDate => {
    return isFromDate
      ? DateMonth(this.props.data.dateFrom)
      : '  ' + DateMonth(this.props.data.dateTo)
  }

  today = () => {
    return DateNames[Today(this.props.data.dateFrom, this.props.data.dateTo)]
  }

  time = isFrom => {
    return isFrom ? this.props.data.timeFrom + ' -' : this.props.data.timeTo
  }

  location = () => {
    return this.props.data.location.adr
  }

  store = () => {
    return this.props.data.store
  }

  introText = () => {
    return this.props.data.shortDescription
  }

  redText = () => {
    return {
      ...styles.text,
      color: this.props.color,
      opacity: 0.9
    }
  }

  category = () => {
    return Category(this.props.data.category)
  }

  price = () => {
    return this.props.data.price
  }

  distance = () => {
    return Distance(
      this.props.lastLat,
      this.props.lastLong,
      this.props.data.location.lat,
      this.props.data.location.long
    )
  }

  navigate = () => {
    this.props.navigate({
      lat: this.props.data.location.lat,
      long: this.props.data.location.long
    })
  }

  navigateOnClick = () => {
    const { navigate } = this.props.navigation
    var data = {
      data: this.props.data,
      color: this.props.color
    }
    this.props.onEvent(data)
    navigate('DetailedEvent')
  }

  render() {
    return (
      <View
        style={[
          wrapperStyle(this.state.radius),
          {
            borderLeftColor: this.props.color
          }
        ]}
      >
        <View style={styles.leftContent}>
          <View style={[styles.contentBox]}>
            <View style={[styles.textBox]}>
              {textAppender(styles.text, this.dateFrom(), 40, 37)}
              {textAppender(this.redText(), this.month(true), 25, 24)}
            </View>
            <View style={[styles.textBox]}>
              {textAppender(styles.text, this.dateTo(), 20, 20)}
              {textAppender(styles.text, this.month(false), 15, 15)}
            </View>
          </View>
          <View
            style={[
              styles.contentBox,
              { justifyContent: 'flex-end', flexDirection: 'column' }
            ]}
          >
            <View style={[styles.textBox]}>
              {textAppender(styles.text, this.today(), 30, 0)}
              {textAppender(styles.text, 'Kl. ' + this.time(true), 16, 16)}
              {textAppender(styles.text, 'Kl. ' + this.time(false), 16, 16)}
            </View>
          </View>
        </View>
        <View style={styles.rightContent}>
          <View style={styles.contentBox}>
            <View style={styles.rightContentLeftBox}>
              <View
                style={[
                  styles.stripledLine,
                  { borderLeftColor: this.props.color }
                ]}
              />
            </View>
            <View style={[styles.rightContentHeaderBox]}>
              <View style={[styles.contentBox]}>
                {textAppender(txtHeader, this.store(), 20, 20)}
              </View>
              <View style={seperator}>
                <TouchableHighlight
                  underlayColor={'transparent'}
                  style={location}
                  onPress={() => this.navigate()}
                >
                  {textAppender(txtPrimary, this.location(), 13, 13)}
                </TouchableHighlight>
              </View>
            </View>
          </View>
          <View style={rightLowerContentBox}>
            <View
              style={[styles.contentBox, { alignItems: 'flex-start', flex: 2 }]}
            >
              <View style={styles.rightContentLeftBox} />
              <TouchableHighlight
                underlayColor={null}
                style={[styles.rightContentHeaderBox]}
                onPress={() => this.navigateOnClick()}
              >
                <View style={styles.contentBox}>
                  {textAppender(txtPrimary, this.introText(), 15, 15)}
                </View>
              </TouchableHighlight>
            </View>
            <View style={[styles.contentBoxWithSpacing]}>
              <View style={[styles.textBox]}>
                {textAppender(styles.text, 'PRIS', 20, 20)}
                {textAppender(styles.text, this.price(), 15, 15)}
              </View>
              <View style={[styles.textBox]}>
                {textAppender(styles.text, 'KATEGORI', 20, 20)}
                {textAppender(styles.text, this.category(), 15, 15)}
              </View>
              <View style={[styles.textBox]}>
                {textAppender(styles.text, 'AVSTAND', 20, 20)}
                {textAppender(styles.text, this.distance() + ' KM', 15, 15)}
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
const logo = require('../../../mockups/images/logo.png')

const textAppender = (style, text, size, lineHeight) => {
  return (
    <Text style={[style, { fontSize: size, lineHeight: lineHeight }]}>
      {text}
    </Text>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    event: state.event.event
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEvent: data => {
      dispatch(event(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventCard)
