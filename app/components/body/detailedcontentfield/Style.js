import font from '../../../assets/font'
import color from '../../../assets/color'
export const styles = {
  container: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 1
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  contentBox: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: font.primary,
    color: 'black'
  }
}
