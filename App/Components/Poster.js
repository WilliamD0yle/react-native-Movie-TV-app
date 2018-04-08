import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { View } from "native-base";
const POSTER_URL = 'https://image.tmdb.org/t/p/w154';
// Styles
import styles from '../Styles/MoviesStyle';

export default class Poster extends Component {
  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.row}>
          <ImageBackground
            style={{flex: 1, width: undefined, height: undefined}}
            resizeMode='cover'
            source={{uri: POSTER_URL + this.props.data.poster_path }}
          >
          </ImageBackground>
        </View>
      </TouchableOpacity>
    )
  }
}
