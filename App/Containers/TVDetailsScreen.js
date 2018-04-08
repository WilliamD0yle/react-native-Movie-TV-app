import React, { Component } from 'react';
import { BackHandler, ImageBackground, View, ListView, TouchableHighlight, Platform } from 'react-native';
import { Content, Container, Icon, Button, Text, Title, Tab, Tabs } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import { connect } from 'react-redux';
import { trailerFetch, showDetails } from '../Actions';
import Header from '../Components/Header';
import Details from '../Components/Details';
import YoutubeComponent from '../Components/YoutubeComponent';
import Poster from '../Components/Poster';
// Styles
import styles from '../Styles/DetailsScreenStyle';

class TVDetailsScreen extends Component {
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack();
      return true;
    });
    this.props.trailerFetch(this.props.navigation.state.params.data.original_name);
    this.props.showDetails(this.props.navigation.state.params.data.id);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({seasons}) {

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(seasons);
  }

  render () {
    const { backdrop_path, overview, poster_path, original_name } = this.props.navigation.state.params.data;
    const { genres, tagline, videoID } = this.props;

    return (
      <Container style={styles.container}>
        <View style={{backgroundColor: 'rgb(201, 201, 201)', height: Platform.OS === 'ios' ? 20 : 0 }} />
        <Header
          left={
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <EntypoIcon
                style={{ color: '#f7f7f7' }}
                size={30}
                name="chevron-left"
              />
            </Button>
          }
          body={
            <Title style={{ color: '#ebe8e8' }}>{original_name}</Title>
          }
          right={
            <Button transparent onPress={() => this.props.navigation.navigate('Search')}>
              <Icon
                name="ios-search"
                style={{ color: '#f7f7f7' }}
              />
            </Button>
          }
        />
        <YoutubeComponent
          videoID={videoID}
          backdrop_path={backdrop_path}
        />
        <View style={styles.lineBreak} />
        <Tabs
          hasTabs
          style={{flex: 2}}
          tabBarUnderlineStyle={{backgroundColor: 'rgb(224, 223, 95)'}}
        >
         <Tab
           tabStyle={{backgroundColor: 'rgb(26, 27, 27)'}}
           textStyle={{color: '#fff'}}
           activeTabStyle={{backgroundColor: 'rgb(74, 74, 74)'}}
           activeTextStyle={{color: '#cccccc', fontWeight: 'normal'}}
           heading="Overview"
           >
             <Details
               poster_path={poster_path}
               title={original_name}
               tagline={tagline}
               overview={overview}
             />
         </Tab>
         <Tab
           heading="Seasons"
           tabStyle={{backgroundColor: 'rgb(26, 27, 27)'}}
           textStyle={{color: '#fff'}}
           activeTabStyle={{backgroundColor: 'rgb(74, 74, 74)'}}
           activeTextStyle={{color: '#cccccc', fontWeight: 'normal'}}
           >
           <View style={{flex: 1}}>
             <ImageBackground
               style={{flex: 1, alignSelf: 'stretch', width: undefined, height: undefined}}
               resizeMode='cover'
               source={{uri: `https://image.tmdb.org/t/p/w300${poster_path}` }}
             >
               <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                 <ListView
                   style={{flex: 1}}
                   enableEmptySections
                   contentContainerStyle={styles.listContent}
                   dataSource={this.dataSource}
                   renderRow={rowData => <Poster
                       data={rowData}
                       onPress={() => this.props.navigation.navigate('EpisodesScreen', {id: this.props.navigation.state.params.data.id, season:rowData.season_number})}
                     />
                   }
                 />
               </View>
             </ImageBackground>
           </View>
         </Tab>
       </Tabs>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const genres = state.details.genres;
  const tagline = state.details.tagline;
  const seasons = state.details.seasons;
  const videoID = state.trailer.id;

  return {videoID, genres, tagline, seasons}
}

const mapDispatchToProps = (dispatch) => {
  return {
    trailerFetch: show => {
      dispatch(trailerFetch(show))
    },
    showDetails: id => {
      dispatch(showDetails(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TVDetailsScreen)
