import { StyleSheet, Dimensions, Platform } from 'react-native'
import { HeaderHeight, MarginTop } from '../../../mockups/HeaderHeight'

export const styles = {
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HeaderHeight,
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'space-around'
  },
  box: {
    marginHorizontal: 60,
    marginTop: MarginTop,
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btnLeft: {
    backgroundColor: 'blue'
  },
  btnRight: {
    backgroundColor: 'red'
  }
}
