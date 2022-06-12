import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, Modal, Pressable, Alert } from 'react-native';
import Produto from '../Components/Produto';



export default function Categorias(){
  const modaf =[
    {id:1, nome:'Camisa Feminina', preco:'R$39,90', imagem:'https://a-static.mlcdn.com.br/800x560/camisa-social-feminina-manga-longa-tecido-viscose-de-botoes-casual-basica-gisele-freitas/giselefreitas/185-azm-gg/90e3d02959acd33bcecd41fee8336b15.jpg'},
    {id:2, nome:'Casaco Feminino', preco:'R$129,90', imagem: 'https://cf.shopee.com.br/file/e35d9ca4b558a0ccc47870c0920dd8f9'},
    {id:3, nome:'Saia', preco:'R$49,90', imagem: 'https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-feminina/saias-e-minissaias/saia-gode-preta_183943_600_3.jpg'},
    {id:4, nome: 'Bolsa', preco:'R$49,90', imagem: 'https://m.media-amazon.com/images/I/51H+AVsys8S._AC_.jpg'},
    {id:5, nome: 'Touca', preco:'R$29,90',imagem: 'https://junkiesskateboard.com.br/wp-content/uploads/2021/07/touca-narina-rosa-junkies-skate-shop.jpg'}
  ];
  const modam =[
    {id:1, nome:'Camisa Social', preco:'R$39,90', imagem:'https://images.tcdn.com.br/img/img_prod/1045219/camisa_masculina_abercrombie_manga_longa_azul_483_1_5cd1457faceffc0e299c2243c79c9cea_20211119141004.jpg'},
    {id:2, nome:'Casaco Masculino', preco: 'R$89,90', imagem:'https://images-americanas.b2w.io/produtos/2977281854/imagens/casaco-masculino-com-capuz-jaqueta-de-inverno-casaco-quente-com-capuz/2977281871_1_large.jpg'},
    {id:3, nome:'Bermuda', preco: 'R$229,90', imagem:'https://a-static.mlcdn.com.br/800x560/bermuda-masculina-infielder-classic-moletom-para-academia/ismaelduarte/66996e0a04cc11ec99cc4201ac185013/c73a761ebd2c8d74d25572628f5721e1.jpg'},
    {id:4, nome: 'Casaco Masculino', preco:'R$89,90',imagem: 'https://a-static.mlcdn.com.br/800x560/blusa-moletom-slim-b39-jaqueta-casaco-moleton-masculino-vcstilo/vcstilo/651306856/9c950c1f656629857b90aaea8c353caa.jpg'},
  ];
  return(
    <ScrollView>
      <View>
      <Text style={styles.Title}>  BAZZAAR</Text> 
      </View>
      <View>
        <Text style={styles.subtitle}>MODA FEMININA</Text>
        <FlatList 
              data={modaf}
              renderItem={({item}) => (Produto({item}))}
              key={(item) => item.id}
              horizontal={true}
              />
      </View>
      <View>
      <Text style={styles.subtitle}>MODA MASCULINA</Text>
      <FlatList 
              data={modam}
              renderItem={({item}) => (Produto({item}))}
              key={(item) => item.id}
              horizontal={true}
              />
      </View>
    </ScrollView>
  )
}
//estilos
const styles = StyleSheet.create({
  Title:{
    fontSize: 26,
     textTransform: 'uppercase', 
     marginTop: 3,
     color: "#442C2E",
     borderBottomColor: '#442C2E'
  },
  subtitle:{
    color: "#442C2E", 
    fontSize: 18,
    textAlign: 'center',
    borderBottomColor:'#442C2E',
    borderTopColor:'#442C2E',
    borderBottomWidth:2,
    borderTopWidth:2,
    backgroundColor:'#FEEAE6'
  }
})