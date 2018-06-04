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
import BeerInfo from './src/components/BeerInfo';
import BeerDetail from './src/components/BeerDetail';





class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: 'beerlist',
      beerinfo: {}
    }
    this.changeState = this.changeState.bind(this);
  }

  changeState(toChangeTo, theBeer) {
    this.setState({
      show: toChangeTo,
      beerinfo: theBeer
    })
  }

  toRender() {
    switch(this.state.show) {
      case 'beerlist':
        return <Beerlist changeState={this.changeState} show={this.state.show}/>
        break;
      case 'beerinfo':
      console.log('thisisstate', this.state)
        return <BeerDetail beers={this.state.beerinfo} beerstate={this.state.show}/>
        break;
    }
  }

  render() {
    const view = this.toRender()
    return (
      <View style={{ flex: 1}} >
        <Header headerText={'Beers'} />
        {view}

      </View>

    );
  }
}

export default App;
