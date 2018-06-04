import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text

} from 'react-native';
import BeerDetail from './BeerDetail';
import BeerInfo from './BeerInfo';
import { Header,  Button } from 'native-base';
import { createStackNavigator } from 'react-navigation';

const Navigation =  createStackNavigator({
  Home:{
    screen:'BeerInfo',
  }
})


class Beerlist extends Component {
  constructor(props){
    super(props);
    this.state = {
      beers: [],
      isfiltered: false,
      currentBeer: null
    };
    this.renderBeers = this.renderBeers.bind(this);
    this.renderOne = this.renderOne.bind(this);


  }

  componentDidMount() {
    fetch('https://gentle-waters-18197.herokuapp.com/')
    .then(resp => resp.json())
    .then(data => this.setState({
      beers: data.all
    }))
  }


  renderOne(id) {
        this.setState({
          currentBeer: id
        });


console.log('rendered')
}
//need an extra function to setstate
//checls the conditirion od isfilteres. if is filtered is false, then do this, is is true, do a thing (renderbeers)

//separate map, if id===beer.id, then render the thing

//



  renderBeers() {
    if(this.state.currentBeer){
        return <BeerInfo />
      } else {
    return (
      this.state.beers.map(beer=>
        <BeerDetail
      key={beer.name}
      beers={beer}
      changeState={this.props.changeState}
      show={this.props.show}/>

      )
    )
  }
  }

  render() {
  return (


    <ScrollView>
      <Text>{this.renderBeers()}
      </Text>
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
