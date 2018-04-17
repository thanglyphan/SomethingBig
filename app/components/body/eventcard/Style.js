import { StyleSheet, Dimensions, Platform } from 'react-native'
import font from '../../../assets/font'
import color from '../../../assets/color'
const { height, width } = Dimensions.get('window')

export const styles = {
  wrapper: {
    height: 165,
    width: window.width,
    marginHorizontal: 8,
    backgroundColor: '#FFF',
    borderLeftWidth: 7,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5
  },
  leftContent: {
    display: 'flex',
    borderRightWidth: 1,
    borderColor: color.main,
    flex: 1,
    marginVertical: 10,
    marginLeft: 10
  },
  rightContent: {
    display: 'flex',
    flex: 3,
    margin: 10
  },
  rightContentLeftBox: {
    flex: 1
  },
  rightContentHeaderBox: {
    flex: 15
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 5,
    shadowOpacity: 0.3
  },
  contentBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  contentBoxWithSpacing: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  text: {
    fontFamily: font.eventCard,
    textAlign: 'left',
    color: 'black',
    opacity: 0.7
  },
  stripledLine: {
    flex: 1,
    borderLeftWidth: 4
  }
}

export const rightLowerContentBox = {
  ...styles.contentBox,
  flex: 2,
  marginTop: 10,
  flexDirection: 'column'
}

export const txtHeader = {
  ...styles.text,
  opacity: 0.9
}

export const txtPrimary = {
  ...styles.text,
  fontFamily: font.primary,
  opacity: 1
}

export const wrapperStyle = radius => {
  return {
    ...styles.wrapper,
    ...styles.shadow,
    borderTopLeftRadius: radius
  }
}

export const seperator = {
  ...styles.contentBox,
  borderBottomWidth: 1,
  borderColor: color.main
}

export const location = {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center'
}
