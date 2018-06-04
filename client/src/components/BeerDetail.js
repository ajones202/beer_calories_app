import React, { Component } from 'react';
import {
  Image,
  Text,
  View
} from 'react-native';
import Tile from './Tile';
import TileSquare from './TileSquare';



const BeerDetail = ( { beers } ) => {
    const { name, calories, img, abv } = beers;
    const {
            thumbnailStyle,
            headerContentStyle,
            headerTextStyle,
            thumbnailContainerStyle,
      } = styles;

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
          <Text>abv:{abv}%</Text>
        </View>
    </TileSquare>

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
      height: 200,
      width: 100,
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },

  }

export default BeerDetail;