import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, Modal, Pressable, Alert } from 'react-native'
import { widthPercentageToDP, heightPercentageToDP, listenOrientationChange, removeOrientationListener } from 'react-native-responsive-screen';

class Sobre extends Component {
  componentDidMount(){listenOrientationChange(this);}
  componentWillUnmount(){ removeOrientationListener();}
  render() {
    let img = require('../Images/clothes.jpg');
    return (
      <ScrollView>
        <View>
          <Text style={{ fontSize: 26, textTransform: 'uppercase', marginTop: 3, color: "#442C2E" }}>  BAZZAAR</Text>
        </View>
        <View><Text style={styles.subtitle}>NO SEU ESTILO</Text></View>
        <View>
          <Image source={img} style={styles.Imagem}></Image>
        </View>
        <View><Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text></View>
      </ScrollView>
    );
  }
};
//estilos
const styles = StyleSheet.create({
  subtitle: {
    color: "#442C2E",
    fontSize: 18,
    textAlign: 'center',
    borderBottomColor: '#442C2E',
    borderTopColor: '#442C2E',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    backgroundColor: '#FEEAE6',
    marginTop: 10
  },
  Imagem: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('35%'),
    alignSelf: 'center'

  },
  text:{
    textAlign:'justify',
    marginLeft:10,
    marginRight:10,
    fontSize:14,
    color:'#442C2E'
  }
});
export default Sobre;