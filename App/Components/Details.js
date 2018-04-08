import React, { Component } from 'react';
import { ImageBackground, View, ScrollView,} from 'react-native';
import { Text } from 'native-base';
// Styles
import styles from '../Styles/DetailsScreenStyle';

export default class Details extends Component {
  render () {
    const { poster_path, title, tagline, release_date, runtime, overview } = this.props;
    return (
      <View style={{flex: 2}}>
        <ImageBackground
          style={{flex: 1, alignSelf: 'stretch', width: undefined, height: undefined}}
          resizeMode='cover'
          source={{uri: `https://image.tmdb.org/t/p/w342${poster_path}` }}
        >
          <ScrollView style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.tagline}>{tagline}</Text>
            <Text style={styles.date}>{release_date}  {runtime}mins </Text>
            <Text style={styles.overview}>
                {overview}
            </Text>
          </ScrollView>
        </ImageBackground>
      </View>
    )
  }
}
