import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, Modal, Pressable, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from './src/Components/Header';
import Footer from './src/Components/Footer';
import { Molde, Molda, Moldado, Mocaxdz, Saia, Mocaazul, Mocabranco, Peludo, Sobretudo, Camisa, Piazin, Piazon, Gola, Tenis} from './src/Components/Molde';
import {widthPercentageToDP, heightPercentageToDP, listenOrientationChange,  removeOrientationListener } from 'react-native-responsive-screen';


class App extends Component {
   componentDidMount(){listenOrientationChange(this);}
   componentWillUnmount(){removeOrientationListener();}

  render() {

    let bolsa = require('./src/Images/bolsa.jpg');
    let caracasaco = require('./src/Images/caracasaco.jpg');
    let caramochila = require('./src/Images/caramochila.jpg');
    let carasobretudo = require('./src/Images/carasobretudo.jpg');
    let mocaazul = require('./src/Images/mocaazul.jpg');
    let mocabranco = require('./src/Images/mocabranco.jpg');
    let mocacasacoazul = require('./src/Images/mocacasacoazul.jpg');
    let mocasobretudo = require('./src/Images/mocasobretudo.jpg');
    let mocaxdz = require('./src/Images/mocaxdz.jpg');
    let piazin = require('./src/Images/piazin2.jpg');
    let piazon = require('./src/Images/piazin.jpg')
    let saia = require('./src/Images/saia.jpg');
    let mocagolalta = require('./src/Images/mocagolalta.jpg');
    let tenis = require('./src/Images/tenis.jpg');


    return (



      <ScrollView style={{ backgroundColor: "White" }}>
        <View><Header></Header></View>
        <View style={{backgroundColor:"white"}}>
      
         <Text style={{
            fontSize: 26, textTransform: 'uppercase', marginTop: 3, borderBottomWidth: 2, color: "#442C2E",
            borderBottomColor: '#442C2E'
          }}>  BAZZAAR</Text> 



          <Text style={{ color: "#442C2E", textAlign: "center", margin: 8, fontSize: 16 }}>OS MAIS PEDIDOS</Text>
          <ScrollView horizontal={true} style={{width:widthPercentageToDP('100%')}}>
          
            <View style={{ backgroundColor: "#FEEAE6", marginLeft: 5, marginRight: 10}}>
              <Image
                style={{ width: 150, height: 150 }}
                source={bolsa}
              />
              <Text style={{ color: "#442C2E", textAlign: "center" }}>Bolsa</Text>
              <Text style={{ color: "#442C2E", textAlign: "center" }}>R$49,90</Text>
              <View><Molde></Molde></View>
              <View>

              </View>

            </View>

            <View style={{ backgroundColor: "#FEEAE6", marginLeft: 5, marginRight: 10}}>
              <Image
                style={{ width: 150, height: 150 }}
                source={mocasobretudo}
              />
              <Text style={{ color: "#442C2E", textAlign: "center" }}>Sobretudo Feminino</Text>
              <Text style={{ color: "#442C2E", textAlign: "center" }}>R$159,90</Text>
              <View><Moldado></Moldado></View>
            </View>

            <View style={{ backgroundColor: "#FEEAE6", marginLeft: 5, marginRight: 10}}>
              <Image
                style={{ width: 150, height: 150 }}
                source={mocaxdz}
              />
              <Text style={{ color: "#442C2E", textAlign: "center" }}>Cardigan xadrez</Text>
              <Text style={{ color: "#442C2E", textAlign: "center" }}>R$109,90</Text>
              <View><Mocaxdz></Mocaxdz></View>
            </View>
            <View style={{ backgroundColor: "#FEEAE6", marginLeft: 5, marginRight: 10, marginBottom: 5}}>
              <Image
                style={{ width: 150, height: 150 }}
                source={piazon}
              />
              <Text style={{ color: "#442C2E", textAlign: "center" }}>Conjunto kids</Text>
              <Text style={{ color: "#442C2E", textAlign: "center"}}>R$89,90</Text>
              <View><Piazon></Piazon></View>
              </View>
            
            
          </ScrollView>

          <Text style={{ color: "#442C2E", margin: 5, marginTop: 14, fontSize: 16 }}>MODA FEMININA</Text>
          <ScrollView horizontal={true} style={{width:widthPercentageToDP('100%')}}>
            <View style={{ backgroundColor: "#FEEAE6", marginLeft: 5, marginRight: 10}}>
              <Image
                style={{ width: 120, height: 120 }}
                source={saia}
              />
              <Text style={{ color: "#442C2E", textAlign: "center", fontSize: 12 }}>Saia Jeans</Text>
              <Text style={{ color: "#442C2E", textAlign: "center", fontSize: 12 }}>R$89,90</Text>
              <View><Saia></Saia></View>
            </View>
            <View style={{ backgroundColor: "#FEEAE6", marginLeft: 5, marginRight: 10 }}>
              <Image
                style={{ width: 120, height: 120 }}
                source={mocagolalta}
              />
              <Text style={{ color: "#442C2E", textAlign: "center", fontSize: 12 }}>Suéter Gola Alta</Text>
              <Text style={{ color: "#442C2E", textAlign: "center", fontSize: 12 }}>R$89,90</Text>
              <View><Gola></Gola></View>
            </View>
            <View style={{ backgroundColor: "#FEEAE6", marginLeft: 5, marginRight: 10}}>
              <Image
                style={{ width: 120, height: 120 }}
                source={mocaazul}
              />
              <Text style={{ color: "#442C2E", textAlign: "center", fontSize: 12 }}>Conjunto Street</Text>
              <Text style={{ color: "#442C2E", textAlign: "center", fontSize: 12 }}>R$199,90</Text>
              <View><Mocaazul></Mocaazul></View>
            </View>
            <View style={{ backgroundColor: "#FEEAE6", marginLeft: 5, marginRight: 10 }}>
              <Image
                style={{ width: 120, height: 120 }}
                source={mocabranco}
              />
              <Text style={{ color: "#442C2E", textAlign: "center", fontSize: 12 }}>Blusa</Text>
              <Text style={{ color: "#442C2E", textAlign: "center", fontSize: 12 }}>R$29,90</Text>
              <View><Mocabranco></Mocabranco></View>
            </View>
            <View style={{ backgroundColor: "#FEEAE6", marginLeft: 5, marginRight: 10}}>
              <Image
                style={{ width: 120, height: 120 }}
                source={mocacasacoazul}
              />
              <Text style={{ color: "#442C2E", textAlign: "center", fontSize: 12 }}>Casaco peludo</Text>
              <Text style={{ color: "#442C2E", textAlign: "center", fontSize: 12 }}>R$89,90</Text>
              <View><Peludo></Peludo></View>
            </View>


          </ScrollView>

          <Text style={{ color: "#442C2E", margin: 5, marginTop: 14, fontSize: 16 }}>MODA MASCULINA</Text>
          <ScrollView horizontal={true} style={{width:widthPercentageToDP('100%')}}>

            <View style={{ backgroundColor: "#FEEAE6", marginLeft: 5, marginRight: 10, marginBottom: 5}}>
              <Image
                style={{ width: 120, height: 120 }}
                source={carasobretudo}
              />
              <Text style={{ color: "#442C2E", textAlign: "center", fontSize: 12 }}>Sobretudo</Text>
              <Text style={{ color: "#442C2E", textAlign: "center", fontSize: 12 }}>R$129,90</Text>
              <View><Sobretudo></Sobretudo></View>
            </View>
            <View style={{ backgroundColor: "#FEEAE6", marginLeft: 5, marginRight: 10, marginBottom: 5}}>
              <Image
                style={{ width: 120, height: 120 }}
                source={caracasaco}
              />
              <Text style={{ color: "#442C2E", textAlign: "center", fontSize: 12 }}>Casaco Papaco</Text>
              <Text style={{ color: "#442C2E", textAlign: "center", fontSize: 12 }}>R$89,90</Text>
              <View><Molda></Molda></View>
            </View>
            <View style={{ backgroundColor: "#FEEAE6", marginLeft: 5, marginRight: 10,  marginBottom: 5}}>
              <Image
                style={{ width: 120, height: 120 }}
                source={caramochila}
              />
              <Text style={{ color: "#442C2E", textAlign: "center", fontSize: 12 }}>Camiseta</Text>
              <Text style={{ color: "#442C2E", textAlign: "center", fontSize: 12 }}>R$29,90</Text>
              <View><Camisa></Camisa></View>
            </View>
            <View style={{ backgroundColor: "#FEEAE6", marginLeft: 5, marginRight: 10, marginBottom: 5}}>
              <Image
                style={{ width: 120, height: 120 }}
                source={piazin}
              />
              <Text style={{ color: "#442C2E", textAlign: "center", fontSize: 12 }}>Conjunto kids</Text>
              <Text style={{ color: "#442C2E", textAlign: "center", fontSize: 12 }}>R$89,90</Text>
              <View><Piazin></Piazin></View>
            </View>
            <View style={{ backgroundColor: "#FEEAE6", marginLeft: 5, marginRight: 10, marginBottom: 5}}>
              <Image
                style={{ width: 120, height: 120 }}
                source={tenis}
              />
              <Text style={{ color: "#442C2E", textAlign: "center", fontSize: 12 }}>Tênis</Text>
              <Text style={{ color: "#442C2E", textAlign: "center", fontSize: 12 }}>R$229,90</Text>
              <View><Tenis></Tenis></View>
            </View>

          </ScrollView>
          <View>
          <View><Footer></Footer></View>
          </View>
        </View>
      </ScrollView>

    )
  }
}


export default App;
