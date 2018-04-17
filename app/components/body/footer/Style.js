import { StyleSheet, Dimensions, Platform } from 'react-native'
import { FooterHeight, MarginTop } from '../../../mockups/HeaderHeight'
import font from '../../../assets/font'
import color from '../../../assets/color'

export const styles = {
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: FooterHeight,
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 5,
    shadowOpacity: 0.7
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 15,
    marginHorizontal: 10
  },
  rectangle: {
    display: 'flex',
    flex: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: color.eventCard[2]
  },
  btnText: {
    fontFamily: font.primaryBold,
    fontSize: 16,
    color: '#FFF'
  },
  text: {
    fontFamily: font.primary,
    fontSize: 14,
    color: 'black'
  },
  textBold: {
    fontFamily: font.primaryBold,
    fontSize: 14,
    color: color.eventCard[2]
  }
}
