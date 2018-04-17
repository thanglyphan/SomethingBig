import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ScrollView,
  Text,
  View,
  Button,
  Image,
  TouchableHighlight
} from 'react-native'
import { maincontrol } from '../../../actions/maincontrol'
import color from '../../../assets/color'
import { styles } from './Style'

class Header extends Component {
  toggleScreen = screenId => {
    var isMain = screenId == 'Main' ? true : false
    console.log(isMain)
    this.props.maincontrol(isMain)
    // console.log(this.props.isMain)

    this.props.navigate.navigate(screenId)
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.upper} />
        <View style={styles.lower}>
          <View style={styles.left} />
          <View style={styles.middle}>
            <TouchableHighlight onPress={() => this.toggleScreen('Map')}>
              <Text style={styles.text}>Kart</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.toggleScreen('Main')}>
              <Text style={styles.text}>Salg</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.right}>
            {this.props.isMain && (
              <TouchableHighlight onPress={() => console.log('yo')}>
                <Image
                  source={require('../../../assets/images/unlocked.png')}
                  style={styles.img}
                />
              </TouchableHighlight>
            )}
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isMain: state.maincontrol.isMain
  }
}

const mapDispatchToProps = dispatch => {
  return {
    maincontrol: isMain => {
      dispatch(maincontrol(isMain))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
