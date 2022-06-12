import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, Modal, Pressable, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const Pagamentos = () => {
  
    return (
      <ScrollView>
      <View>
      <Text style={{fontSize: 26, textTransform: 'uppercase', marginTop: 3, color: "#442C2E"}}>  BAZZAAR</Text> 
      </View>
      <View ><Text style={styles.subtitle}>ACEITAMOS CARTÕES!</Text></View>
      <View>
     <Text style={styles.subtitle1}><Icon name ='card' style={{color:'red'}}></Icon> Mastercard</Text>
     <Text style={styles.subtitle1}><Icon name='card'  style={{color:'blue'}}></Icon> Visa</Text>
     <Text style={styles.subtitle1}><Icon name='card'  style={{color:'green'}}></Icon> Elo</Text>
     <Text style={styles.subtitle1}><Icon name='card'  style={{color:'gold'}}></Icon> American Express</Text>
     <Text style={styles.subtitle1}><Icon name='card'  style={{color:'black'}}></Icon> Hipercard</Text>
     </View>
     <View></View>
     <View ><Text style={styles.subtitle}>OUTRAS OPÇÕES</Text></View>
     <View>
     <Text style={styles.subtitle1}><Icon name ='cash' style={{color:'green'}}></Icon> Dinheiro</Text>
     <Text style={styles.subtitle1}><Icon name ='newspaper' style={{color:'gray'}}></Icon> Carnê</Text>
     <Text style={styles.subtitle1}><Icon name ='reader' style={{color:'pink'}}></Icon> Cheque</Text>
     <Text style={styles.subtitle1}><Icon name ='phone-portrait-sharp' style={{color:'green'}}></Icon> PIX</Text>
     </View>
      </ScrollView>
    );
  };
  //estilos
  const styles = StyleSheet.create({
    subtitle:{
    color: "#442C2E", 
    fontSize: 18,
    textAlign: 'center',
    borderBottomColor:'#442C2E',
    borderTopColor:'#442C2E',
    borderBottomWidth:2,
    borderTopWidth:2,
    backgroundColor:'#FEEAE6'
    
     
    },
    subtitle1:{
      color: "#442C2E", 
      fontSize: 16,
      textAlign: 'left',
      marginLeft: 20
     
    }
  });
  export default Pagamentos;