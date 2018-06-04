/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  AppRegistry,
  View
} from 'react-native';
import Header from './src/components/Header';
import Beerlist from './src/components/Beerlist';







class App extends Component {

  render() {
    return (
      <View style={{ flex: 1}} >
        <Header headerText={'Beers'} />
        <Beerlist />

      </View>

    );
  }
}

export default App;
