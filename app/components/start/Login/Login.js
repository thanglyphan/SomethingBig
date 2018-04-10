import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  WebView
} from 'react-native'
import { Image, View } from 'react-native-animatable'
import { styles } from './Style'
import { login } from '../../../actions/auth'
import imgLogo from '../../../assets/images/logo.png'
import RegisterForm from '../Forms/RegisterForm'
import LoginForm from '../Forms/LoginForm'

import { renderLower, inputField, smallTextButton } from './SmallComponents'

if (Platform.OS === 'android')
  UIManager.setLayoutAnimationEnabledExperimental(true)

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      fullname: '',
      isGuest: false,
      isLoginForm: true
    }
  }

  userLogin(username, password, isGuest) {
    this.props.onLogin(username, password, isGuest)
  }

  guestLogin() {
    this.userLogin('.', '.', true)
  }

  handleData = data => {
    this.setState({
      username: data.username,
      password: data.password,
      fullname: data.fullname
    })
  }

  toggle = bool => {
    this.setState({ isLoginForm: bool })
  }

  renderContent = bool => {
    return bool ? (
      <LoginForm
        login={(a, b, c) => this.userLogin(a, b, c)}
        toggle={() => this.toggle(false)}
        guestLogin={() => this.guestLogin()}
        data={this.state}
        action={data => this.handleData(data)}
      />
    ) : (
      <RegisterForm
        action={data => this.handleData(data)}
        update={() => this.toggle(true)}
        guestLogin={() => this.guestLogin()}
      />
    )
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
        <View style={styles.upper} pointerEvents="none">
          {this.renderLogo('bounceIn', 50, 1000)}
        </View>
        <KeyboardAvoidingView
          keyboardVerticalOffset={0}
          behavior={'padding'}
          style={{ flex: 2 }}
          pointerEvents="box-none"
        >
          {this.renderContent(this.state.isLoginForm)}
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    username: state.auth.username,
    password: state.auth.password,
    isGuest: state.auth.isGuest
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (username, password, isGuest) => {
      dispatch(login(username, password, isGuest))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
