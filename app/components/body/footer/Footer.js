import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ScrollView,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native'
import { styles } from './Style'
class Footer extends Component {
  navigate = () => {
    this.props.navigate({
      lat: this.props.event.data.location.lat,
      long: this.props.event.data.location.long
    })
  }

  render() {
    return (
      <View style={[styles.wrapper, styles.shadow]}>
        <View style={[styles.content]}>
          <Text style={styles.text}>
            Fra kl. <Text style={[styles.textBold]}>{this.props.timeFrom}</Text>
          </Text>
          <Text style={styles.text}>
            Til kl. <Text style={[styles.textBold]}>{this.props.timeTo}</Text>
          </Text>
        </View>
        <View style={styles.content}>
          <TouchableHighlight
            style={[styles.rectangle]}
            onPress={() => this.navigate()}
          >
            <Text style={styles.btnText}>Vis på kartet</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    event: state.event.event
  }
}

export default connect(mapStateToProps)(Footer)
