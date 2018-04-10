import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text, View, Button } from 'react-native'
import { logout } from '../../../actions/auth'
import Header from '../header/Header'

class MainSaved extends Component {
  userLogout() {
    this.props.onLogout()
  }

  render() {
    return (
      <ScrollView style={{ padding: 20 }}>
        <Text style={{ fontSize: 27 }}>
          {!this.props.isGuest
            ? `Welcome ${this.props.username}`
            : 'Welcome Guest!'}
        </Text>
        <View style={{ margin: 20 }} />
        <Button onPress={e => this.userLogout()} title="Logout" />
      </ScrollView>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    username: state.auth.username,
    isLoggedIn: state.auth.isLoggedIn,
    isGuest: state.auth.isGuest
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => {
      dispatch(logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSaved)
