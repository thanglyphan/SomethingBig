import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ScrollView,
  Text,
  TextInput,
  Button,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native'
import { Image, View } from 'react-native-animatable'
import Swiper from 'react-native-swiper'
import { styles } from './Style'
import { signup } from '../../../actions/auth'
import imgLogo from '../../../assets/images/logo.png'
import { renderLower, inputField } from '../Login/SmallComponents'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: props.data.username,
      password: props.data.password
    }
  }

  userSignIn = () => {
    this.props.action(this.state)
    this.props.update()
  }

  checkValidInput(info) {
    return info.username != '' && info.password != '' && info.fullname != ''
  }

  getLowerComponent = () => {
    return renderLower(
      () => this.props.login(this.state.username, this.state.password, false),
      () => this.props.toggle(false),
      () => this.props.guestLogin(),
      'Sign in',
      'Dont have an account?',
      'Sign up',
      '/',
      'Sign in as Guest'
    )
  }

  render() {
    return (
      <View
        animation={'fadeInUp'}
        delay={100}
        duration={400}
        style={{ flex: 1 }}
        pointerEvents="box-none"
      >
        <View style={styles.middle} pointerEvents="box-none">
          {inputField(1, 'Username', this.state.username, text =>
            this.setState({ username: text })
          )}
          {inputField(2, 'Password', this.state.password, text =>
            this.setState({ password: text })
          )}
        </View>
        {this.getLowerComponent()}
      </View>
    )
  }
}
