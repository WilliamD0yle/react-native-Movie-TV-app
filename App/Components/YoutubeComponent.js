import React, { Component } from 'react';
import { ImageBackground, View, Platform, Linking } from 'react-native';
import { Text } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import YouTube, { YouTubeStandaloneIOS, YouTubeStandaloneAndroid } from 'react-native-youtube';
// Styles
import styles from '../Styles/DetailsScreenStyle';

export default class YoutubeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quality: null,
      error: null,
      isPlaying: false,
      fullscreen: false,
    };
  }

  render () {
    const { videoID, backdrop_path } = this.props;
    return (
      <View style={{flex: 1}}>
      {this.state.isPlaying === false ?
        <ImageBackground
          style={{flex: 1, alignSelf: 'stretch', width: undefined, height: undefined, }}
          resizeMode='cover'
          source={{uri: `https://image.tmdb.org/t/p/w300${backdrop_path}` }}
        >
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.15)'}}>
            <EntypoIcon
              onPress={() => {
                Platform.OS === 'ios' ? this.setState({isPlaying: true})
                : Linking.openURL(`https://www.youtube.com/watch?v=${videoID}`)
              }}
              size={40}
              name="youtube"
              style={{ color: '#f7f7f7' }}
            />
            <Text style={{ color: '#f7f7f7' }}>Play Trailer</Text>
          </View>
        </ImageBackground>
        :
        <YouTube
          ref={(component) => { this._youTubePlayer = component }}
          videoId={this.props.videoID} // The YouTube video ID
          play={this.state.isPlaying}  // control playback of video with true/false
          fullscreen={false}           // control whether the video should play full-screen or inline
          loop={false}
          controls={1}                 // control whether the video should loop when ended
          apiKey="AIzaSyDOD4l6AUGz6e2Yb2645GgVeK3OiTKfkLc"
          onReady={e => {this.setState({ isReady: true })}}
          onError={e => console.log(e.error)}
          style={{ flex: 1, alignSelf: 'auto', height: 300, backgroundColor: 'black', paddingBottom: 10 }}
        />
      }
      </View>
    )
  }
}
