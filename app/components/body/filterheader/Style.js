import { StyleSheet, Dimensions, Platform } from 'react-native'
import { HeaderHeight, MarginTop } from '../../../mockups/HeaderHeight'

export const styles = {
  filterHeader: {
    height: 45,
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 5,
    shadowOpacity: 0.7
  }
}
