import { StyleSheet, Dimensions, Platform } from 'react-native'
import { HeaderHeight, MarginTop } from '../../../mockups/HeaderHeight'
import color from '../../../assets/color'
import font from '../../../assets/font'

export const styles = {
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HeaderHeight,
    backgroundColor: color.eventCard[3],
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'column'
  },
  upper: {
    display: 'flex',
    flex: 1
  },
  lower: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  left: {
    flex: 1
  },
  middle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  right: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  text: {
    fontFamily: font.primaryRegular,
    color: '#FFF',
    fontSize: 20
  },
  img: {
    height: 25,
    width: 25
  }
}
