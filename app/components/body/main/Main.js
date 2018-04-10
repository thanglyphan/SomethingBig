import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ScrollView,
  Text,
  View,
  Button,
  ListView,
  YellowBox
} from 'react-native'
import { logout } from '../../../actions/auth'
import Header from '../header/Header'
import { styles } from './Style'
import EventCard from '../eventcard/EventCard'
import content from '../../../mockups/data.json'
import { destination } from '../../../actions/destination'
import { Today } from '../../../mockups/DataConverter'
class Main extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows([])
    }
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(content.data)
    })
  }

  navigateToMap = data => {
    const { navigate } = this.props.navigation
    this.props.toDestination(data)
    navigate('Map')
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <ListView
          style={{ marginTop: 10 }}
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(rowData, rowId, sectionId) => (
            <EventCard
              data={rowData}
              sectionId={sectionId}
              lastLat={this.props.region.latitude}
              lastLong={this.props.region.longitude}
              navigate={data => this.navigateToMap(data)}
            />
          )}
        />
      </View>
    )
  }
}
const ended = 'SLUTT'

const mapStateToProps = (state, ownProps) => {
  return {
    region: state.location.region
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toDestination: data => {
      dispatch(destination(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
