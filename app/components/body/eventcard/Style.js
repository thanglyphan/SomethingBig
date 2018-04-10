import { StyleSheet, Dimensions, Platform } from 'react-native'
import font from '../../../assets/font'
import color from '../../../assets/color'
const { height, width } = Dimensions.get('window')

export const styles = {
  wrapper: {
    height: 180,
    width: window.width,
    marginHorizontal: 10,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    borderLeftWidth: 7,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 4
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
  opacity: 0.9
}

export const wrapperStyle = radius => {
  return {
    ...styles.wrapper,
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
