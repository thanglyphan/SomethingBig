import React, { Component } from 'react'
import { ScrollView, Text, View, Button } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import { MapStyle } from '../../../mockups/MapStyle'
import { styles } from './Style'
import { connect } from 'react-redux'
import { location } from '../../../actions/location'
import content from '../../../mockups/data.json'
import Polyline from '@mapbox/polyline'

class Map extends Component {
  constructor() {
    super()
    this.state = {
      coords: []
    }
  }

  componentWillMount() {
    this.watchID = navigator.geolocation.watchPosition(position => {
      let region = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }
      this.props.onLocation(region)
    })
    this.goToDestination()
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

  goToDestination() {
    try {
      var start = this.props.region.latitude + ',' + this.props.region.longitude
      var endLat = this.props.toDestination.lat + ','
      var endLong = this.props.toDestination.long
      var end = endLat + endLong
      this.getDirections(start, end)
    } catch (error) {
      return error
    }
  }

  async getDirections(startLoc, destinationLoc) {
    try {
      let resp = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}`
      )
      let respJson = await resp.json()
      let points = Polyline.decode(respJson.routes[0].overview_polyline.points)
      let coords = points.map((point, index) => {
        return {
          latitude: point[0],
          longitude: point[1]
        }
      })
      this.setState({ coords: coords })
    } catch (error) {
      return error
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={this.props.region}
          showsUserLocation={true}
          followUserLocation={true}
          customMapStyle={MapStyle}
        >
          <MapView.Polyline
            coordinates={this.state.coords}
            strokeWidth={5}
            strokeColor="red"
          />
          {content.data.map(item => (
            <Marker
              key={item.location.lat}
              coordinate={{
                latitude: item.location.lat,
                longitude: item.location.long
              }}
            />
          ))}
        </MapView>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    region: state.location.region,
    toDestination: state.destination.toDestination
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLocation: region => {
      dispatch(location(region))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
