import { StyleSheet, Dimensions, Platform } from 'react-native'
import font from '../../../assets/font'
import color from '../../../assets/color'

const { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1
  },
  background: {
    position: 'absolute',
    width,
    height
  },
  logoImg: {
    flex: 1,
    alignSelf: 'center',
    resizeMode: 'contain'
  }
})
