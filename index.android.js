/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import DircetorList from './app/page/DirectoryList'
import Navigation from './app/config/route'
console.disableYellowBox = true
export default class coinhub extends Component {

  render() {
    return (
        <Navigation />
    );
  }
}

AppRegistry.registerComponent('coinhub', () => coinhub);
