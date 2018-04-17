import { StyleSheet, Dimensions, Platform } from 'react-native'
import {
  HeaderHeight,
  FooterHeight,
  MarginTop
} from '../../../mockups/HeaderHeight'
import font from '../../../assets/font'

const ROW_HEIGHT = 60
const PARALLAX_HEADER_HEIGHT = 250
const STICKY_HEADER_HEIGHT = 80
const D_WIDTH = Dimensions.get('window').width
const MARGIN_BOT = 15
export const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingBottom: FooterHeight + 10
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: D_WIDTH,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  stickySectionText: {
    fontFamily: font.primary,
    color: 'black',
    fontSize: 22,
    marginBottom: MARGIN_BOT
  },
  fixedSection: {
    position: 'absolute',
    height: STICKY_HEADER_HEIGHT,
    width: D_WIDTH,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 5
  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 20
  }
}
