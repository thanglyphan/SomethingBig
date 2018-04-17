import font from '../../../assets/font'
import color from '../../../assets/color'
export const styles = {
  container: {
    display: 'flex',
    height: 300,
    marginTop: 10,
    flexDirection: 'column'
  },
  headerArea: {
    height: 30,
    paddingHorizontal: 20,
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
  map: {
    flex: 1
  }
}
