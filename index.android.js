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
import Component2 from './app/components/component2/component2';

export default class firstreactapp extends Component {
  render() {
    return (
      <View>
        <Component2 />
      </View>
    );
  }
}

AppRegistry.registerComponent('firstreactapp', () => firstreactapp);
