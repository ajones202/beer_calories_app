import React, { Component } from 'react';
import {
  Image,
  View,
  Navigation,
  Alert
} from 'react-native';
import Tile from './Tile';
import TileSquare from './TileSquare';
import { Header,  Button, Text, Icon } from 'native-base';
import { createStackNavigator } from 'react-navigation';
import BeerInfo from './BeerInfo';
import Beerlist from './Beerlist';




function BeerDetail(props){
    const { id, name, calories, img, abv, walking, running, oz, carbs, biking } = props.beers;
    const {
            thumbnailStyle,
            headerContentStyle,
            headerTextStyle,
            thumbnailContainerStyle,
      } = styles;



function buttonPress(id) {
 console.log(`these are the details for this beer ${name}
  calories ${calories}`)
 Alert.alert(`You would need to run for ${running} minutes to burn this off!`)
 props.changeState('beerinfo', props.beers)
}
function favorites() {
 props.renderOne

}


  return (
    <Tile>
    <TileSquare>
      <View style={thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: img }} />
      </View>
        <View style={styles.headerContentStyle}>
          <Text style={headerTextStyle}></Text>
          <Text>{name}</Text>
          <Text>abv: {abv}%</Text>
            <Text>Calories: {calories}</Text>
             <Text>running</Text>
            <Text><Icon name="heart" /> {running} </Text>
            <Text>walking</Text>
            <Text><Icon name="man" /> {walking} </Text>

            <Text>biking</Text>
            <Text><Icon name="bicycle" /> {biking} </Text>
        </View>
    </TileSquare>
        {props.show === 'beerlist' ? <Button
        style={styles.textRight}
        info
        onPress={() => buttonPress(id)}>
          <Text>More Info</Text>
        </Button> : ''}
        <Button
        style={styles.textRight}
        notification
        onPress={() => favorites(id)}>
          <Text>Add to Favorites</Text>
        </Button>
    </Tile>
    );

};

const styles = {
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 30
    },

    thumbnailStyle: {
      height: 400,
      width: 200,
    },
    thumbnailContainerStyle: {
      height: 400,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },

    titleStyle: {
      fontSize: 20,
      fontFamily:'helvetica'
    },
    textRight: {
    alignSelf: 'flex-end',
    width: 200,
    justifyContent: 'center',
    marginTop:10
},

  }

export default BeerDetail;
