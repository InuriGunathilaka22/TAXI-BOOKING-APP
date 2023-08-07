import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Intro from './intro';

export default class index extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Intro />
      </View>
    );
  }
}
