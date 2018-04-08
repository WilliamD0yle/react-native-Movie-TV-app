import React, { Component } from 'react';
import { BackHandler, ListView, Image, ImageBackground, TouchableHighlight, Platform } from 'react-native';
import { ListItem, Text, View, Container, Title, Button, Icon } from "native-base";
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import { connect } from 'react-redux';
import { seasonDetails, clearEpisodeState } from '../Actions';
import Header from '../Components/Header'
// Styles
import styles from '../Styles/DetailsScreenStyle';

class EpisodesDetailsScreen extends Component {
  componentWillMount() {
    this.props.seasonDetails(this.props.navigation.state.params.id, this.props.navigation.state.params.season);
    this.createDataSource(this.props);
  }
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack();
      this.props.clearEpisodeState();
      return true;
    });
  }
  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({episodes}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(episodes);
  }

  renderRow (rowData) {
    return (
      <View style={styles.ImageBackground}>
        <Text style={styles.title}>{rowData.name}</Text>
        <Text style={styles.date}>{rowData.air_date}</Text>
        <Image
          style={{width: undefined, height: 150, margin: 10}}
          resizeMode='cover'
          source={{uri: `https://image.tmdb.org/t/p/w300${rowData.still_path}` }}
        />
        <View style={{backgroundColor: 'rgb(224, 223, 95)', height: 2, margin: 10}} />
        <Text style={styles.overview}>
            {rowData.overview}
        </Text>
      </View>
    )
  }

  render() {
    const { name, backdrop_path, episodes } = this.props;

    return (
      <Container style={styles.container}>
        <View style={{backgroundColor: 'rgb(201, 201, 201)', height: Platform.OS === 'ios' ? 20 : 0 }} />
        <Header
          left={
            <Button transparent onPress={() => {this.props.navigation.goBack(); this.props.clearEpisodeState()}}>
              <EntypoIcon
                style={{ color: '#f7f7f7' }}
                size={30}
                name="chevron-left"
              />
            </Button>
          }
          body={
            <Title style={{ color: '#ebe8e8' }}>{name}</Title>
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
        <ImageBackground
          style={{flex: 1, alignSelf: 'stretch', width: undefined, height: undefined}}
          resizeMode='cover'
          source={{uri: `https://image.tmdb.org/t/p/w300${backdrop_path}` }}
        >
          <ListView
            enableEmptySections
            contentContainerStyle={styles.EpisodeContent}
            dataSource={this.dataSource}
            renderRow={this.renderRow.bind(this)}
          />
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const backdrop_path = state.details.poster_path;
  const name = state.details.name;
  const episodes = state.episodes;

  return { name, backdrop_path, episodes };
};

const mapDispatchToProps = (dispatch) => {
  return {
    seasonDetails: (id, season) => {
      dispatch(seasonDetails(id, season))
    },
    clearEpisodeState: () => {
      dispatch(clearEpisodeState())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesDetailsScreen);
