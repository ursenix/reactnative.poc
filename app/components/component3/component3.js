/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TextInput
} from 'react-native';

export default class Component3 extends Component {

constructor(){
    super();
    this.state = {
        textValue: 'Hello'
    }
}

onChangeText(value){
    this.setState({
        textValue:value
    })
}

  render() {
    return (
      <View>
        <TextInput
            placeholder="Enter text"
            value = {this.state.textValue}
            onChangeText = {(value)=> this.onChangeText(value)}
        />
        <Text>{this.state.textValue}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component3', () => Component3);
