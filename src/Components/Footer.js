import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import {widthPercentageToDP, heightPercentageToDP, listenOrientationChange,  removeOrientationListener } from 'react-native-responsive-screen';


class Footer extends Component {
    componentDidMount(){listenOrientationChange(this);}
    componentWillUnmount(){ removeOrientationListener();}
    render() {
        let cards = require('../Images/cards.png')
        return (
            <ScrollView>
                <View style={footer.container}>
                    <View style={footer.back}>
                    <Text style={footer.textf}>    Rua Eusébio 10, Centro, Cidade das Águas</Text>
                        <Text style={footer.textf1}>    Segunda a Sexta das 10:00 às 21:00</Text>
                        <Text style={footer.textf1} >    Aceitamos cartões!</Text>
                        <View><Image
                            style={footer.logo} source={cards}

                        /></View>

                    </View>
                </View>
            </ScrollView>

        );
    }
}




const footer = StyleSheet.create({
    
    container: {
        marginTop: 10,
        
        backgroundColor: "#F3F3F3",

    },
    back: {
        
        width: widthPercentageToDP('200%'),
       
        height: heightPercentageToDP('15%'),
        
        backgroundColor: "#F3F3F3",

    },

    logo: {
        width: 250,
        height: 30,
        marginLeft:10,
        marginBottom: 10,
        position: "absolute",
    },
    textf: {
        borderTopColor: "#442C2E",
        borderTopWidth: 2,
        fontSize: 14,
        textAlign: 'left',
       
        color: "#442C2E",
    },
    textf1: {
        fontSize:14,
        textAlign: 'left',
        
        color: "#442C2E",
    }
});

export default Footer;
