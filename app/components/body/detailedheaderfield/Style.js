import font from '../../../assets/font'
import color from '../../../assets/color'
export const styles = {
  container: {
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    margin: 10
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1
  },
  contentBox: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginVertical: 7,
    alignItems: 'flex-start'
  },
  dateBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    flex: 0.25
  },
  textWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  text: {
    fontFamily: font.primary,
    color: 'black',
    opacity: 1
  },
  textDate: {
    fontFamily: font.eventCard,
    color: 'black',
    opacity: 0.7
  },
  textBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
}
