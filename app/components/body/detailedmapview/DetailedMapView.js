import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ScrollView,
  View,
  Dimensions,
  Image,
  Animated,
  Text
} from 'react-native'
import { styles } from './Style'
import ReadMore from 'react-native-read-more-text'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import { MapStyle } from '../../../mockups/MapStyle'

class DetailedMapView extends Component {
  render() {
    const coords = {
      latitude: this.props.event.data.location.lat,
      longitude: this.props.event.data.location.long,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02
    }
    return (
      <View style={[styles.container, { borderColor: this.props.color }]}>
        <View style={styles.headerArea}>
          <Text style={styles.textHeader}>Om stedet</Text>
        </View>
        <View style={{ flex: 1 }}>
          <MapView
            pitchEnabled={false}
            rotateEnabled={false}
            zoomEnabled={false}
            scrollEnabled={false}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={coords}
            customMapStyle={MapStyle}
          >
            <Marker coordinate={coords} />
          </MapView>
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

export default connect(mapStateToProps)(DetailedMapView)
