import React, { Component } from 'react';
import { BackHandler, ListView, ImageBackground, TouchableHighlight, Platform } from 'react-native';
import { AlertMessage, List, ListItem, Text, View, Container, Header, Title, Button, Left, Right, Body, Icon, Item, Input } from "native-base";
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import { connect } from 'react-redux';
import { searchAll, clearAllState } from '../Actions';
// Styles
import searchstyles from '../Styles/SearchBarStyles';
import styles from '../Styles/MoviesStyle';
const POSTER_URL = 'https://image.tmdb.org/t/p/w300';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => {
      this.props.navigation.goBack();
      this.props.clearAllState();
      return true;
    });
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({searchResults}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(searchResults);
  }

  renderRow (rowData) {
    if(rowData.poster_path){
      return (
        <TouchableHighlight onPress={() => {rowData.media_type === 'movie' ? this.props.navigation.navigate('MovieDetails', {data: rowData}) : this.props.navigation.navigate('TVDetails', {data: rowData})}}>
          <View style={styles.row}>
            <ImageBackground
              style={{flex: 1, alignSelf: 'stretch', width: undefined, height: undefined}}
              resizeMode='cover'
              source={{uri: POSTER_URL + rowData.poster_path }}
            >
              {/* <Text style={styles.boldLabel}>{rowData.title}</Text> */}
              {/* <Text style={styles.label}>{rowData.description}</Text> */}
            </ImageBackground>
          </View>
        </TouchableHighlight>
      )
    } else {
      return <View />
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header searchBar style={{ backgroundColor: 'rgb(26, 27, 27)', borderBottomColor: 'transparent' }}>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => {this.props.navigation.goBack(); this.props.clearAllState()}}>
              <EntypoIcon
                style={{ color: '#f7f7f7' }}
                size={30}
                name="chevron-left"
              />
            </Button>
          </Left>
          <Body style={{ flex: 5, alignItems: 'flex-start' }}>
            <Item>
              <Input
                style={{flex: 1, color: 'rgb(238, 238, 238)', }}
                placeholder='Search'
                autoCorrect={false}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                onSubmitEditing={() => {this.props.search(this.state.text); this.setState({search: true})}}
              />
            </Item>
          </Body>
        </Header>
        {
          this.props.searchResults.length > 0 ?
          <ListView
            enableEmptySections
            contentContainerStyle={styles.listContent}
            dataSource={this.dataSource}
            renderRow={this.renderRow.bind(this)}
          />
          :
          null
        }
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const searchResults = state.search.data;
  return { searchResults };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: query => {
      dispatch(searchAll(query))
    },
    clearAllState: () => {
      dispatch(clearAllState())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
