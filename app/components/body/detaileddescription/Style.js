import font from '../../../assets/font'
import color from '../../../assets/color'
export const styles = {
  container: {
    display: 'flex',
    marginTop: 10,
    flexDirection: 'column',
    paddingBottom: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    marginBottom: 10
  },
  headerArea: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10
  },
  textHeader: {
    fontFamily: font.primary,
    color: 'black',
    fontWeight: '400',
    fontSize: 20
  },
  text: {
    fontFamily: font.primary,
    color: 'black',
    fontSize: 16
  }
}
