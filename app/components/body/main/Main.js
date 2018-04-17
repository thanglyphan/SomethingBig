import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  ListView,
  YellowBox,
  LayoutAnimation
} from 'react-native'
import { logout } from '../../../actions/auth'
import Header from '../header/Header'
import FilterHeader from '../filterheader/FilterHeader'
import { styles } from './Style'
import EventCard from '../eventcard/EventCard'
import content from '../../../mockups/data.json'
import { destination } from '../../../actions/destination'
import { Include, Distance, Today } from '../../../mockups/DataConverter'
import color from '../../../assets/color'

const SortEnum = {
  default: 0,
  available: 1,
  distance: 2
}

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
})

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: ds.cloneWithRows([]),
      filterByEnded: false,
      filterByCategory: false,
      sortOn: SortEnum.default
    }
  }

  componentDidMount() {
    this.initList(content.data)
    this.sortByAvailable()
  }

  initList = list => {
    this.setState({
      dataSource: ds.cloneWithRows(list)
    })
  }

  navigateToMap = data => {
    const { navigate } = this.props.navigation
    this.props.toDestination(data)
    navigate('Map')
  }

  sort() {
    switch (this.state.sortOn) {
      case SortEnum.available:
        this.sortByAvailable()
        break
      case SortEnum.distance:
        this.sortByDistance()
        break
    }
  }

  filter = data => {
    this.setState(data, () => {
      this.initList(this.filteredList())
      this.sort()
    })
  }

  filteredList = () => {
    var data = content.data
    var endedList = data.filter(x => Include(x.dateFrom, x.dateTo))
    var catList = data.filter(x => x.category == 0)
    var finalList = []

    if (this.state.filterByEnded && this.state.filterByCategory)
      finalList = endedList.filter(x => x.category == 0)

    if (this.state.filterByEnded && !this.state.filterByCategory)
      finalList = endedList

    if (!this.state.filterByEnded && !this.state.filterByCategory)
      finalList = data

    if (!this.state.filterByEnded && this.state.filterByCategory)
      finalList = catList

    return finalList
  }

  sortByAvailable = () => {
    this.setState({ sortOn: SortEnum.available }, () => {
      var list = this.state.dataSource._dataBlob.s1.sort((a, b) => {
        return Today(a.dateFrom, a.dateTo) - Today(b.dateFrom, b.dateTo)
      })
      this.initList(list)
    })
  }

  sortByDistance = () => {
    this.setState({ sortOn: SortEnum.distance }, () => {
      var list = this.state.dataSource._dataBlob.s1.sort((a, b) => {
        var posLat = this.props.region.latitude
        var posLong = this.props.region.longitude
        var distA = Distance(posLat, posLong, a.location.lat, a.location.long)
        var distB = Distance(posLat, posLong, b.location.lat, b.location.long)
        return distA - distB
      })
      this.initList(list)
    })
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <FilterHeader
          filterEnded={() =>
            this.filter({
              filterByEnded: !this.state.filterByEnded
            })
          }
          filterCategory={() =>
            this.filter({
              filterByCategory: !this.state.filterByCategory
            })
          }
          sortAvailable={() => this.sortByAvailable()}
          sortDistance={() => this.sortByDistance()}
        />
        <ListView
          style={{ paddingTop: 10 }}
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(rowData, rowId, sectionId) => (
            <EventCard
              data={rowData}
              color={color.eventCard[Today(rowData.dateFrom, rowData.dateTo)]}
              sectionId={sectionId}
              lastLat={this.props.region.latitude}
              lastLong={this.props.region.longitude}
              navigate={data => this.navigateToMap(data)}
              navigation={this.props.navigation}
            />
          )}
        />
      </View>
    )
  }
}

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
