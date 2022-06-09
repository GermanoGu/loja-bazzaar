import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import {widthPercentageToDP, heightPercentageToDP, listenOrientationChange,  removeOrientationListener } from 'react-native-responsive-screen';

class Header extends Component {
  componentDidMount(){listenOrientationChange(this);}
   componentWillUnmount(){ removeOrientationListener();}
  render() {
    let ft = require('../Images/hbg.png');
    return (
      <View style={header.background}>
        <View style={header.container}>
          <Image
            style={header.logo} source={ft}

          />
        </View>
      </View>
    );
  }
}



const header = StyleSheet.create({
  background: {
    width: widthPercentageToDP('200%'),
    height: 40,
    backgroundColor: "#FFDCD0"
  },
  container: {
    left: 16
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 14,
    color: "white",
    fontWeight: "500"
  },
  logo: {
    width: 30,
    height: 30,
    position: "absolute",

  }
});

export default Header;
