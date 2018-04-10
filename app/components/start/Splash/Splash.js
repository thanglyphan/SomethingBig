import React, { Component } from 'react'
import {
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  WebView
} from 'react-native'
import { Image } from 'react-native-animatable'
import { styles } from './Style'
import imgLogo from '../../../assets/images/logo.png'
import { connect } from 'react-redux'
import { location } from '../../../actions/location'

class Splash extends Component {
  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    if (!this.props.fromLogin) {
      const { navigate } = this.props.navigation
      setTimeout(() => {
        navigate('Map')
      }, 1300)
    }
    this.setLocation()
  }

  setLocation() {
    this.watchID = navigator.geolocation.watchPosition(position => {
      let region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      }
      this.props.onLocation(region)
    })
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

  renderLogo = (animation, delay, duration) => {
    return (
      <Image
        animation={animation}
        duration={duration}
        delay={delay}
        ref={ref => (this.logoImgRef = ref)}
        style={styles.logoImg}
        source={imgLogo}
      />
    )
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <WebView
          scrollEnabled={false}
          source={require('../../../assets/html/particles.html')}
          style={styles.background}
        />
        <View style={{ flex: 1.5 }} pointerEvents="none">
          {this.renderLogo('zoomOut', 1000, 300)}
        </View>
        <View style={{ flex: 2 }} />
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    region: state.location.region
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onLocation: region => {
      dispatch(location(region))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
