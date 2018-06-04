import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import BeerDetail from './BeerDetail';


class Beerlist extends Component {
  constructor(props){
    super(props);
    this.state = {
      beers: [],
    };
    this.renderBeers = this.renderBeers.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3001')
    .then(resp => resp.json())
    .then(data => this.setState({
      beers: data.all
    }))
  }

  renderBeers() {
    return (
      this.state.beers.map(beer=>
        <BeerDetail key={beer.name} beers={beer} />

      )
    )
  }

  render() {
  return (
    <ScrollView>
      <Text>{this.renderBeers()}</Text>
    </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  });

export default Beerlist;
