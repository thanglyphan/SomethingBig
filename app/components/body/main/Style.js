import { StyleSheet, Dimensions, Platform } from 'react-native'
import font from '../../../assets/font'
import color from '../../../assets/color'
const { height, width } = Dimensions.get('window')
import { HeaderHeight } from '../../../mockups/HeaderHeight'
export const styles = StyleSheet.create({
  wrapper: {
    paddingTop: HeaderHeight,
    display: 'flex',
    flex: 1,
    backgroundColor: color.main
  }
})
