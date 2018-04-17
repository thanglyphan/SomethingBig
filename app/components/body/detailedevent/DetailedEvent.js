import React, { Component } from 'react'
import {
  ScrollView,
  Text,
  View,
  Button,
  TouchableHighlight,
  Dimensions,
  Animated,
  ListView,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import { destination } from '../../../actions/destination'
import { styles } from './Style'
import AnimatedHeader from '../animatedheader/AnimatedHeader'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import DetailedContentField from '../detailedcontentfield/DetailedContentField'
import DetailedHeaderField from '../detailedheaderfield/DetailedHeaderField'
import DetailedDescription from '../detaileddescription/DetailedDescription'
import Footer from '../footer/Footer'
import DetailedMapView from '../detailedmapview/DetailedMapView'
import Icon from 'react-native-vector-icons/EvilIcons'

import {
  DateDay,
  DateMonth,
  Today,
  Category,
  Distance,
  DateNames
} from '../../../mockups/DataConverter'
const window = Dimensions.get('window')

const PARALLAX_HEADER_HEIGHT = 250
const STICKY_HEADER_HEIGHT = 80

class DetailedEvent extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props)

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows([
        <DetailedHeaderField
          color={this.props.event.color}
          store={this.props.event.data.store}
          adr={this.props.event.data.location.adr}
          title={this.props.event.data.title}
          dateFrom={DateDay(this.props.event.data.dateFrom)}
          dateTo={'-' + DateDay(this.props.event.data.dateTo)}
          monthFrom={DateMonth(this.props.event.data.dateFrom)}
          monthTo={DateMonth(this.props.event.data.dateTo)}
        />,
        <DetailedContentField
          color={this.props.event.color}
          data={this.dataMainInfo()}
        />,
        <DetailedDescription
          color={this.props.event.color}
          text={this.props.event.data.description}
        />,
        <DetailedContentField
          color={this.props.event.color}
          data={this.dataContact()}
        />,
        <DetailedMapView />
      ])
    }
  }

  dataMainInfo = () => {
    return [
      {
        key: 'Når',
        value: this.today()
      },
      {
        key: 'Kategori',
        value: Category(this.props.event.data.category)
      },
      {
        key: 'Pris',
        value: this.props.event.data.price
      },
      {
        key: 'Avstand',
        value: this.distance() + ' km'
      }
    ]
  }

  dataContact = () => {
    return [
      {
        key: 'Tlf',
        value: this.props.event.data.tlf
      },

      {
        key: 'Email',
        value: this.props.event.data.email
      }
    ]
  }

  today = () => {
    return DateNames[
      Today(this.props.event.data.dateFrom, this.props.event.data.dateTo)
    ]
  }

  distance = () => {
    return Distance(
      this.props.region.latitude,
      this.props.region.longitude,
      this.props.event.data.location.lat,
      this.props.event.data.location.long
    )
  }

  navigateToMap = data => {
    const { navigate } = this.props.navigation
    this.props.toDestination(data)
    navigate('Map')
  }

  render() {
    const { onScroll = () => {} } = this.props
    const { goBack } = this.props.navigation

    return (
      <View style={styles.container}>
        <ListView
          ref="ListView"
          dataSource={this.state.dataSource}
          renderRow={rowData => rowData}
          renderScrollComponent={props => (
            <ParallaxScrollView
              onScroll={onScroll}
              backgroundColor={'#FFF'}
              stickyHeaderHeight={STICKY_HEADER_HEIGHT}
              parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
              backgroundSpeed={10}
              renderForeground={() => <AnimatedHeader />}
              renderStickyHeader={() => (
                <View key="sticky-header" style={styles.stickySection}>
                  <Text style={styles.stickySectionText}>
                    {this.props.event.data.store}
                  </Text>
                </View>
              )}
              renderFixedHeader={() => (
                <View key="fixed-header" style={styles.fixedSection}>
                  <TouchableHighlight
                    onPress={() => goBack()}
                    underlayColor={'transparent'}
                  >
                    <Icon name="chevron-left" size={45} color="black" />
                  </TouchableHighlight>
                </View>
              )}
            />
          )}
        />
        <Footer
          navigate={data => this.navigateToMap(data)}
          color={this.props.event.color}
          timeFrom={this.props.event.data.timeFrom}
          timeTo={this.props.event.data.timeTo}
        />
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    event: state.event.event,
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailedEvent)
