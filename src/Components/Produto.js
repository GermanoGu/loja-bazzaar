import React, { useState } from 'react'
import { View, Text, Image, Modal, Button, TouchableOpacity, ScrollView, Pressable, StyleSheet } from 'react-native'
import { widthPercentageToDP, heightPercentageToDP, listenOrientationChange, removeOrientationListener } from 'react-native-responsive-screen';

//Modal
const Detalhes = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView} accessible={true}
            accessibilityLabel={'Imagem de bolsa toque a baixo para fechar'}>
            <ScrollView>
              <Text style={styles.modalText}></Text>
              <Image style={styles.Imagem} source={{ uri: props.imagem2 }} />
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#442C2E", marginTop: 10, textAlign: 'center' }}>{props.nome2}</Text>
              <Text style={{ fontWeight: 'bold', color: "#442C2E", marginTop: 10, marginBottom: 10, textAlign: 'center' }}>{props.preco2}</Text>
              <Text style={styles.descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
              <Text style={styles.descricao}>Sed do eiusmod tempor incididunt ut labore et dolore. </Text>
              <Text style={styles.descricao}>Sed do eiusmod tempor incididunt ut labore et dolore. </Text>
              <Text style={styles.descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              <Pressable
                accessibilityComponentType="button"
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                style={[styles.button2, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Pressable
        accessible={true}
        accessibilityComponentType="button"
        accessibilityLabel={'Toque para ver mais detalhes sobre o produto'}
        hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Ver detalhes</Text>
      </Pressable>
    </View>
  );
};



// Componente principal
export default function Produto({ item }) {

  return (
    <View style={{ width: 180, marginBottom: 5 }}>
      <View style={{ height: 200, flex: 1, margin: 10 }}>
        <Image source={{ uri: item.imagem }} style={{ flex: 1, borderRadius: 20 }} />
      </View>
      <View style={{ justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{item.nome}</Text>
      </View>
      <View>
        <Text style={{ textAlign: 'center', marginTop: 5 }}>{item.preco}</Text>
        <Detalhes nome2={item.nome} preco2={item.preco} imagem2={item.imagem} />
      </View>
    </View>
  )
}
//estilos
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",


  },
  modalView: {
    width: widthPercentageToDP('100%'),
    heigh: heightPercentageToDP('200%'),
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 2,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#FFDCD0",
  },
  buttonClose: {
    backgroundColor: "#FFDCD0",
  },
  textStyle: {
    color: "#442C2E",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  button2: {
    borderRadius: 2,
    padding: 10,
    elevation: 2,
    marginTop: 35,
    marginBottom: 10

  },
  descricao: {
    color: "#442C2E",
    textAlign: "center"

  },
  Imagem: {
    width: 300,
    height: 400,
    borderRadius: 10,
    marginTop: 30,
    alignSelf: 'center'
  }
});