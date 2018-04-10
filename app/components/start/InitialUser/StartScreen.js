import React, { Component } from 'react'
var { ListView, View, Text, ActivityIndicator } = require('react-native')
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { styles } from './Style'
import Login from '../Login/Login'
import Splash from '../Splash/Splash'
import Main from '../../body/main/Main'
import Navigation from '../../body/navigation/Navigation'
class StartScreen extends Component {
  constructor() {
    super()
    this.state = {
      done: false
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ done: true })
    }, 1800)
  }

  render() {
    return <Navigation />
    // if (this.state.done && this.props.isLoggedIn) return <Main />
    // if (this.state.done && !this.props.isLoggedIn) return <Login />
    // return <Splash fromLogin={true} />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}
export default connect(mapStateToProps)(StartScreen)
