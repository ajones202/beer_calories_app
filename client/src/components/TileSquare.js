import React, { Component } from 'react';
import {
  View
} from 'react-native';

const TileSquare = (props) =>{
  return (
    <View style={styles.containerStyle}>
    {props.children}
    </View>
    );
};


const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    width: 600,
    height: 300,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default TileSquare;
