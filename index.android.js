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
  View
} from 'react-native';
import Component3 from './app/components/component3/component3';

export default class firstreactapp extends Component {
  render() {
    return (
      <View>
        <Component3 />
      </View>
    );
  }
}

AppRegistry.registerComponent('firstreactapp', () => firstreactapp);
