import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../Themes'

export default StyleSheet.create({
  // ...ApplicationStyles.screen,
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
    width: Metrics.screenWidth / 3,
    height: Metrics.screenWidth / 1.75,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    padding: 2,
    borderRadius: 50
  },
  sectionHeader: {
    paddingTop: 0,
    width: Metrics.screenWidth,
    alignSelf: 'center',
    margin: 0,
    backgroundColor: Colors.background
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center'
  },
  listContent: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
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
