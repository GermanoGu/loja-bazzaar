import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, Modal, Pressable, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabsNavigator from './Navigation/TabsNavigator';
import Icon from 'react-native-vector-icons/Ionicons'
import Home from './src/Telas/Home';
import Categorias from './src/Telas/Categorias';
import Pagamentos from './src/Telas/Pagamentos';
import Sobre from './src/Telas/Sobre';

//estilizando o Tab
const MyTheme = {
  dark: false,
  colors: {
    background: 'white',
    card: '#FFDCD0',
    text: '#442C2E',
  },
};

function App() {
  return (
// add navegação
    <NavigationContainer theme={MyTheme}>
      <TabsNavigator />
    </NavigationContainer>

  )
}
export default App;
