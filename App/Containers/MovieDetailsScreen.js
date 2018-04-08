import React, { Component } from 'react';
import { BackHandler, View, Platform } from 'react-native';
import { Container, Button, Title } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import { connect } from 'react-redux';
import { trailerFetch, moviesDetails } from '../Actions';
import Header from '../Components/Header';
import Details from '../Components/Details';
import YoutubeComponent from '../Components/YoutubeComponent';

// Styles
import styles from '../Styles/DetailsScreenStyle';

class MovieDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.props.trailerFetch(this.props.navigation.state.params.data.title);
    this.props.moviesDetails(this.props.navigation.state.params.data.id);
  }

  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack();
      return true;
    });
  }

  render () {

    const { backdrop_path, overview, poster_path, title, vote_average, genre_ids, release_date } = this.props.navigation.state.params.data;
    const { genres, runtime, tagline, videoID } = this.props;

    return (
      <Container style={styles.container}>
        <View style={{backgroundColor: 'rgb(201, 201, 201)', height: Platform.OS === 'ios' ? 20 : 0 }} />
        <Header
          left={
            <Button transparent onPress={() => {this.props.navigation.goBack()}}>
              <EntypoIcon
                style={{ color: '#f7f7f7' }}
                size={30}
                name="chevron-left"
              />
            </Button>
          }
          body={
            <Title style={{ color: '#ebe8e8' }}>{title}</Title>
          }

        />
        <YoutubeComponent
          videoID={videoID}
          backdrop_path={backdrop_path}
        />
        <View style={styles.lineBreak} />
        <Details
          poster_path={poster_path}
          title={title}
          tagline={tagline}
          release_date={release_date}
          runtime={runtime}
          overview={overview}
        />
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const genres = state.details.genres;
  const runtime = state.details.runtime;
  const tagline = state.details.tagline;
  const videoID = state.trailer.id;
  return {videoID, genres, runtime, tagline}
}

const mapDispatchToProps = (dispatch) => {
  return {
    trailerFetch: movieTitle => {
      dispatch(trailerFetch(movieTitle))
    },
    moviesDetails: id => {
      dispatch(moviesDetails(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsScreen)
