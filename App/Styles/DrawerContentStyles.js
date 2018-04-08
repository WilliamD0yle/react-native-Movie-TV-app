import { Fonts, Colors } from '../Themes'

export default {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#4d4d4d'
  },
  logo: {
    flex: 0.5,
    width: 250,
    alignSelf: 'center',
    resizeMode: 'stretch',
  },
  title: {
    paddingLeft: 18,
    fontSize: Fonts.size.h3,
    // fontFamily: Fonts.style.h1,
    color: Colors.ricePaper,
    alignSelf: 'center',
    fontWeight: '300'
  },
  text: {
    color: '#ffffff',
    fontWeight: '600'
  }
}
