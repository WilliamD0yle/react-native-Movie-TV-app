import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import ReduxNavigation from './Navigation/AppNavigation'
import configureStore from './Config/configureStore';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar barStyle={'light-content'}/>
          <ReduxNavigation />
        </View>
      </Provider>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(45, 45, 45)',
    padding: 0,
    margin: 0
  },
};
