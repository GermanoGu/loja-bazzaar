import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../src/Telas/Home';
import Categorias from '../src/Telas/Categorias';
import Pagamentos from '../src/Telas/Pagamentos';
import Sobre from '../src/Telas/Sobre';
import { color } from 'react-native-reanimated';


//add navegação
const Tabs = createBottomTabNavigator();
const TabsNavigator = () => {
  return (
    <Tabs.Navigator 

    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        //Adicionando ícones
        if (route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline';
        } else if (route.name === 'Categorias') {
          iconName = focused
          ? 'list'
          : 'list-outline';
        } else if (route.name === 'Pagamentos') {
          iconName = focused
          ? 'card'
          : 'card-outline';
        }else if (route.name === 'Sobre'){
            iconName = focused
            ? 'md-business'
            : 'md-business-outline';
        }

        //Retornamos o ícone
        return <Icon name={iconName} size={size} color={color} />;
      },
      //Cores dos ícones
      tabBarActiveTintColor: '#442C2E',
      tabBarInactiveTintColor: '#442C2E'
     
    })}    

    >
      <Tabs.Screen 
        
        name="Home" 
        component={Home} 
        options={{title:"Loja"}}
      
      />
      <Tabs.Screen 
        name="Categorias" 
        component={Categorias}
         
      />
      <Tabs.Screen 
        name="Pagamentos" 
        component={Pagamentos}    
  

      />
      <Tabs.Screen 
        name="Sobre" 
        component={Sobre}  
             
      />
    </Tabs.Navigator>
  );
};
export default TabsNavigator;