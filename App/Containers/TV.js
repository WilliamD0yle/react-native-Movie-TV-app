import React, { Component } from 'react';
import { ListView, ImageBackground, TouchableOpacity, TouchableHighlight, Platform } from 'react-native';
import { Text, View, Container, Title, Button, Icon } from "native-base";
import { connect } from 'react-redux';
import ModalDropdown from 'react-native-modal-dropdown';
import { tvshowsFetch, clearTVState } from '../Actions';
import Poster from '../Components/Poster';
import Header from '../Components/Header';
// Styles
import styles from '../Styles/MoviesStyle';

const POSTER_URL = 'https://image.tmdb.org/t/p/w300';
let page = 2;

const genres = [
  {name:'Most Popular', value:'sort_by=popularity.desc'},
  {name:'Action & Adventure', value:'&with_genres=10759'},
  {name:'Animation', value:'&with_genres=16'},
  {name:'Comedy', value:'&with_genres=35'},
  {name:'Crime', value:'&with_genres=80'},
  {name:'Documentary', value:'&with_genres=99'},
  {name:'Drama', value:'&with_genres=18'},
  {name:'Family', value:'&with_genres=10751'},
  {name:'Kids', value:'&with_genres=10762'},
  {name:'Mystery', value:'&with_genres=9648'},
  {name:'News', value:'&with_genres=10763'},
  {name:'Reality', value:'&with_genres=10764'},
  {name:'Science Fiction', value:'&with_genres=10765'},
  {name:'Soap', value:'&with_genres=10766'},
  {name:'War & Politics', value:'&with_genres=10768'},
  {name:'Western', value:'&with_genres=37'}
];

class TV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choice:'sort_by=popularity.desc',
      page: 1,
      selectedValue: 'Most Popular'
    };
    this.props.tvshowsFetch(this.state.choice, this.state.page);
  }

  componentWillMount() {
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({tv}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(tv);
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={{backgroundColor: 'rgb(201, 201, 201)', height: Platform.OS === 'ios' ? 20 : 0 }} />
        <Header
          left={
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon
                name="ios-menu"
                style={{ color: '#f7f7f7' }}
              />
            </Button>
          }
          body={
            <ModalDropdown
              animated
              dropdownStyle={styles.dropdownStyle}
              style={{alignItems: 'center',justifyContent: 'center'}}
              defaultValue='Most Popular'
              textStyle={{color: 'rgb(223, 223, 223)', fontWeight: '600'}}
              options={genres}
              renderRow={rowData => <TouchableHighlight><Text style={styles.genre}>{rowData.name}</Text></TouchableHighlight>}
              onSelect={(e) => {this.setState({selectedValue:genres[e].name, choice: genres[e].value}); this.props.changeGenre(genres[e].value)}}
            >
              <Text style={{ color: '#ebe8e8', fontSize: 15, width: 200, paddingLeft: 10, textAlign: 'center' }}>{this.state.selectedValue}</Text>
            </ModalDropdown>
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
        <ListView
          enableEmptySections
          contentContainerStyle={styles.listContent}
          dataSource={this.dataSource}
          renderRow={rowData => <Poster
              data={rowData}
              onPress={() => this.props.navigation.navigate('TVDetails', {data: rowData})}
            />
          }
          onEndReached={() => this.props.tvshowsFetch(this.state.choice, page++)}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  let tv = state.tv.data;

  return { tv };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tvshowsFetch: (choice, page) => {
      dispatch(tvshowsFetch(choice, page))
    },
    changeGenre: choice => {
      Promise.all([
        dispatch(clearTVState()),
        dispatch(tvshowsFetch(choice, 1))
      ])
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TV);
