import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  header: {
    backgroundColor: 'rgb(26, 27, 27)',
    borderBottomColor: 'transparent',
    height: 50,
    paddingBottom: 15
  },
  row: {
    flex: 1,
    backgroundColor: Colors.fire,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center',
    margin: 10,
    padding: 5,
    paddingVertical: 10,
    borderRadius: Metrics.smallMargin
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'center',
    color: Colors.snow
  },
  listContent: {
    marginTop: Metrics.baseMargin
  },
  genre: {
    fontSize: 20,
    fontWeight: '400',
    color: '#1c1b1b',
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  dropdownStyle: {
    height: Metrics.screenHeight / 1.2
  }
})
