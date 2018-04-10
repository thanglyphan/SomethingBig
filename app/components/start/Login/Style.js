import { StyleSheet, Dimensions, Platform } from 'react-native'
import font from '../../../assets/font'
import color from '../../../assets/color'

import { responsiveFontSize } from 'react-native-responsive-dimensions'

const IS_ANDROID = Platform.OS === 'android'
const { height, width } = Dimensions.get('window')

const metrics = {
  ANDROID_STATUSBAR: 24,
  DEVICE_HEIGHT: IS_ANDROID ? height - 24 : height,
  DEVICE_WIDTH: width
}

const fontsizeOne = responsiveFontSize(1.8)
const fontsizeTwo = responsiveFontSize(2)

const IMAGE_WIDTH = metrics.DEVICE_WIDTH * 0.8

export const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1
  },
  splash: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
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
  },
  upper: {
    flex: 1.5,
    marginBottom: 60
  },
  middle: {
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  inputBox: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 25,
    height: 24,
    borderBottomWidth: 0.2
  },
  image: {
    height: 20,
    width: 20
  },
  textForgotPassword: {
    fontFamily: font.primary,
    color: color.second,
    backgroundColor: 'transparent',
    alignSelf: 'center',
    fontSize: fontsizeOne
  },
  textBottomThin: {
    fontFamily: font.primary,
    color: '#FFF',
    backgroundColor: 'transparent',
    alignSelf: 'center',
    fontSize: fontsizeOne
  },
  textBottomBold: {
    fontFamily: font.primary,
    color: color.second,
    backgroundColor: 'transparent',
    fontWeight: '500',
    alignSelf: 'center',
    fontSize: fontsizeOne
  },
  signinText: {
    fontFamily: font.primary,
    color: '#FFF',
    backgroundColor: 'transparent',
    fontSize: fontsizeTwo
  },
  textInput: {
    fontFamily: font.primary,
    flex: 1,
    color: '#FFF',
    marginLeft: 10,
    fontSize: fontsizeOne
  },
  lower: {
    flex: 1.5,
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10
  },
  lowerTextComponent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0
  },
  button: {
    height: 45,
    width: width / 2,
    borderRadius: 50,
    backgroundColor: 'rgba(0,0,0,.5)',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
