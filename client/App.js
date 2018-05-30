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
  View
} from 'react-native';



type Props = {};
class App extends Component {
  constructor(){
    super();

    this.state = {
      beers: [],
    };
    this.renderBeers = this.renderBeers.bind(this);
  }

  renderBeers() {

    console.log("this is beers", this.state.beers);
  }

  componentWillMount() {
    fetch('http://localhost:3001')
    .then(resp => resp.json())
    .then(data => this.setState({
      beers: data.all
    }))
  }


    // return arr.map((el, index) => {
    //   return <Text>{this.state.beers}</Text>
    // })

          // {JSON.stringify(this.state.beers)}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.renderBeers()}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>

        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default App;
