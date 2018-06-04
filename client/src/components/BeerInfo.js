import React, { Component } from 'react';
import {
  View,

} from 'react-native';
import { Header,  Button, Text } from 'native-base';
import Tile from './Tile';
import { StackNavigator } from 'react-navigation';
import BeerDetail from  './BeerDetail'

function BeerInfo (props) {



  return(
    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
     <Button notification>

      </Button>
     BeerInfo
     </View>
    );

}



export default StackNavigator({
  Home: {
    screen: BeerInfo,
  },
});




