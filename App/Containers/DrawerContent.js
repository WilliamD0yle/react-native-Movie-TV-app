import React, { Component } from 'react';
import { ScrollView, Image, BackHandler } from 'react-native';
import { List, ListItem, Text, View, Content } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import { connect } from 'react-redux';
import { clearAllState } from '../Actions';

import styles from '../Styles/DrawerContentStyles';

class DrawerContent extends Component {
	render() {
		const navigation = this.props.navigation;
		const items = this.props.items;
		const icon = this.props.icons;

		return (
			<View style={styles.container}>
				<Image source={require('../../images/iconLarge.png')} style={styles.logo} />
				<Text style={styles.title}>Project TV</Text>
				<Content>
					<List
						dataArray={items}
						renderRow={item => (
							<ListItem onPress={() => {navigation.navigate(item.routeName); this.props.clearAllState()}}>
								<MaterialIcons
									style={{ color: '#f7f7f7', paddingRight: 10 }}
									size={25}
									name={icon[item.routeName]}
								/>
								<Text style={styles.text}>{item.routeName}</Text>
							</ListItem>
						)}
					/>
				</Content>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
  let movies = state.movies.data;

  return { movies };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearAllState: () => {
      dispatch(clearAllState())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
