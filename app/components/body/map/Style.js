import { StyleSheet, Dimensions, Platform } from 'react-native'
import font from '../../../assets/font'
import color from '../../../assets/color'
const { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: -50
  }
})
