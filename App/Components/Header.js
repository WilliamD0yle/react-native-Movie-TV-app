import React, { Component } from 'react';
import { Header, Left, Right, Body } from "native-base";
import ModalDropdown from 'react-native-modal-dropdown';
// Styles
import styles from '../Styles/MoviesStyle';

export default class HeaderComponent extends Component {
  render() {
    return(
      <Header style={styles.header}>
        <Left style={{flex:1 }}>
          {this.props.left}
        </Left>
        <Body style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          {this.props.body}
        </Body>
        <Right style={{flex: 1}}>
          {this.props.right}
        </Right>
      </Header>
    )
  }
}
