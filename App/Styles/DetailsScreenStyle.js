import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors, Fonts } from '../Themes';

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
    width: 115,
    height: 175,
    margin: Metrics.baseMargin,
    borderRadius: Metrics.smallMargin
  },
  seasonsrow: {
    width: 90,
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingLeft: 2,
    paddingRight: 2,
    borderRadius: Metrics.smallMargin,
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  sectionHeader: {
    paddingTop: Metrics.doubleBaseMargin,
    width: Metrics.screenWidth,
    alignSelf: 'center',
    margin: Metrics.baseMargin,
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
    flexWrap: 'wrap',
  },
  EpisodeContent: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'rgba(0, 0, 0, 0.85)'
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#d7d5d5',
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  tagline: {
    fontSize: 18,
    fontWeight: '600',
    color: '#d7d5d5',
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  overview: {
    fontSize: 16,
    color: '#e8e8e8',
    padding: 10
  },
  date: {
    fontSize: 14,
    color: '#b8b4b4',
    paddingLeft: 10,
  },
  lineBreak: {
    backgroundColor: 'rgb(224, 223, 95)',
    height: 2
  },
  ImageBackground :{
    alignSelf: 'stretch',
    width: Metrics.screenWidth,
    height: undefined
  },
  chromecastAround: {
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 2,
    backgroundColor: '#42A5F5'
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
  },
  chromecastButton: {
    backgroundColor: '#EC407A',
    marginVertical: 10,
  },
  disconnectButton: {
    marginVertical: 10,
    backgroundColor: '#f44336',
  },
  controlButton: {
    marginVertical: 10,
    backgroundColor: '#689F38'
  }
})
