import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

class Molde extends Component {

  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {

    let bolsa = require('../Images/bolsa.jpg');
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {

            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}
              accessible={true}
              accessibilityLabel={'Imagem de bolsa toque a baixo para fechar'}>
              <Text style={styles.modalText}></Text>
              <Image
                style={{ width: 150, height: 150 }}
                source={bolsa}
              />
              <Text style={{ color: "#442C2E", textAlign: "center" }}>Bolsa</Text>
              <Text style={{ color: "#442C2E", textAlign: "center" }}>R$49,90</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Sed do eiusmod tempor incididunt ut labore et dolore. </Text>
              <Pressable
                accessibilityComponentType="button"
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>
                <Text style={styles.textStyle}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          accessible={true}
          accessibilityComponentType="button"
          accessibilityLabel={'Toque para ver mais detalhes sobre o produto'}
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
          <Text style={styles.textStyle}>Ver detalhes</Text>
        </Pressable>
      </View>
    );
  }
}
/*========================================================================================== */
class Molda extends Component {

  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {

    let caracasaco = require('../Images/caracasaco.jpg');
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}
              accessible={true}
              accessibilityLabel={'Imagem de casaco toque a baixo para fechar'}>
              <Text style={styles.modalText}></Text>
              <Image
                style={{ width: 150, height: 150 }}
                source={caracasaco}
              />
              <Text style={{ color: "#442C2E", textAlign: "center" }}>Casaco Papaco</Text>
              <Text style={{ color: "#442C2E", textAlign: "center" }}>R$89,90</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Sed do eiusmod tempor incididunt ut labore et dolore. </Text>
              <Pressable
                accessibilityComponentType="button"
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>

                <Text style={styles.textStyle}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          accessible={true}
          accessibilityComponentType="button"
          accessibilityLabel={'Toque para ver mais detalhes sobre o produto'}
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>
          <Text style={styles.textStyle}>Ver detalhes</Text>
        </Pressable>
      </View>
    );
  }
}

/*========================================================================================== */
class Moldado extends Component {

  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {

    let mocasobretudo = require('../Images/mocasobretudo.jpg');
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}
              accessible={true}
              accessibilityLabel={'Imagem de sobretudo feminino toque a baixo para fechar'}>
              <Text style={styles.modalText}></Text>
              <Image
                style={{ width: 150, height: 150 }}
                source={mocasobretudo}
              />
              <Text style={{ color: "#442C2E", textAlign: "center" }}>Sobretudo Feminino</Text>
              <Text style={{ color: "#442C2E", textAlign: "center" }}>R$159,90</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Sed do eiusmod tempor incididunt ut labore et dolore. </Text>
              <Pressable
                accessibilityComponentType="button"
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          accessible={true}
          accessibilityComponentType="button"
          accessibilityLabel={'Toque para ver mais detalhes sobre o produto'}
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
          <Text style={styles.textStyle}>Ver detalhes</Text>
        </Pressable>
      </View>
    );
  }
}
/*========================================================================================== */
class Mocaxdz extends Component {

  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {

    let mocaxdz = require('../Images/mocaxdz.jpg');
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView} accessible={true}
              accessibilityLabel={'Imagem de cardigan xadrez feminino toque a baixo para fechar'}>
              <Text style={styles.modalText}></Text>
              <Image
                style={{ width: 150, height: 150 }}
                source={mocaxdz}
              />
              <Text style={{ color: "#442C2E", textAlign: "center" }}>Cardigan xadrez</Text>
              <Text style={{ color: "#442C2E", textAlign: "center" }}>R$109,90</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Sed do eiusmod tempor incididunt ut labore et dolore. </Text>
              <Pressable
                accessibilityComponentType="button"
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          accessible={true}
          accessibilityComponentType="button"
          accessibilityLabel={'Toque para ver mais detalhes sobre o produto'}
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
          <Text style={styles.textStyle}>Ver detalhes</Text>
        </Pressable>
      </View>
    );
  }
}
/*========================================================================================== */
class Saia extends Component {

  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {

    let saia = require('../Images/saia.jpg');
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}
              accessible={true}
              accessibilityLabel={'Imagem de Saia Jeans feminino toque a baixo para fechar'}>
              <Text style={styles.modalText}></Text>
              <Image
                style={{ width: 150, height: 150 }}
                source={saia}
              />
              <Text style={{ color: "#442C2E", textAlign: "center" }}>Saia Jeans</Text>
              <Text style={{ color: "#442C2E", textAlign: "center" }}>R$89,90</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Sed do eiusmod tempor incididunt ut labore et dolore. </Text>
              <Pressable
                accessibilityComponentType="button"
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          accessible={true}
          accessibilityComponentType="button"
          accessibilityLabel={'Toque para ver mais detalhes sobre o produto'}
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
          <Text style={styles.textStyle}>Ver detalhes</Text>
        </Pressable>
      </View>
    );
  }
}
/*================================================================================== */
class Mocaazul extends Component {

  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {

    let mocaazul = require('../Images/mocaazul.jpg');
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}
              accessible={true}
              accessibilityLabel={'Imagem de Conjunto Street feminino toque a baixo para fechar'}>
              <Text style={styles.modalText}></Text>
              <Image
                style={{ width: 150, height: 150 }}
                source={mocaazul}
              />
              <Text style={{ color: "#442C2E", textAlign: "center" }}>Conjunto Street</Text>
              <Text style={{ color: "#442C2E", textAlign: "center" }}>R$199,90</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Sed do eiusmod tempor incididunt ut labore et dolore. </Text>
              <Pressable
                accessibilityComponentType="button"
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          accessible={true}
          accessibilityComponentType="button"
          accessibilityLabel={'Toque para ver mais detalhes sobre o produto'}
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
          <Text style={styles.textStyle}>Ver detalhes</Text>
        </Pressable>
      </View>
    );
  }
}
/*================================================================================== */
class Mocabranco extends Component {

  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {

    let mocabranco = require('../Images/mocabranco.jpg');
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}
              accessible={true}
              accessibilityLabel={'Imagem de Blusa feminina toque a baixo para fechar'}>
              <Text style={styles.modalText}></Text>
              <Image
                style={{ width: 150, height: 150 }}
                source={mocabranco}
              />
              <Text style={{ color: "#442C2E", textAlign: "center" }}>Blusa</Text>
              <Text style={{ color: "#442C2E", textAlign: "center" }}>R$29,90</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Sed do eiusmod tempor incididunt ut labore et dolore. </Text>
              <Pressable
                accessibilityComponentType="button"
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          accessible={true}
          accessibilityComponentType="button"
          accessibilityLabel={'Toque para ver mais detalhes sobre o produto'}
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
          <Text style={styles.textStyle}>Ver detalhes</Text>
        </Pressable>
      </View>
    );
  }
}
/*================================================================================== */
class Peludo extends Component {

  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {

    let mocacasacoazul = require('../Images/mocacasacoazul.jpg');
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}
              accessible={true}
              accessibilityLabel={'Imagem de Casaco Peludo Feminino toque a baixo para fechar'}>
              <Text style={styles.modalText}></Text>
              <Image
                style={{ width: 150, height: 150 }}
                source={mocacasacoazul}
              />
              <Text style={{ color: "#442C2E", textAlign: "center" }}>Casaco peludo</Text>
              <Text style={{ color: "#442C2E", textAlign: "center" }}>R$89,90</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Sed do eiusmod tempor incididunt ut labore et dolore. </Text>
              <Pressable
                accessibilityComponentType="button"
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          accessible={true}
          accessibilityComponentType="button"
          accessibilityLabel={'Toque para ver mais detalhes sobre o produto'}
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
          <Text style={styles.textStyle}>Ver detalhes</Text>
        </Pressable>
      </View>
    );
  }
}
/*================================================================================== */
class Sobretudo extends Component {

  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {

    let carasobretudo = require('../Images/carasobretudo.jpg');
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}
              accessible={true}
              accessibilityLabel={'Imagem de Sobretudo Masculino toque a baixo para fechar'}>
              <Text style={styles.modalText}></Text>
              <Image
                style={{ width: 150, height: 150 }}
                source={carasobretudo}
              />
              <Text style={{ color: "#442C2E", textAlign: "center" }}>Sobretudo</Text>
              <Text style={{ color: "#442C2E", textAlign: "center" }}>R$129,90</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Sed do eiusmod tempor incididunt ut labore et dolore. </Text>
              <Pressable
                accessibilityComponentType="button"
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          accessible={true}
          accessibilityComponentType="button"
          accessibilityLabel={'Toque para ver mais detalhes sobre o produto'}
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
          <Text style={styles.textStyle}>Ver detalhes</Text>
        </Pressable>
      </View>
    );
  }
}
/*================================================================================== */
class Camisa extends Component {

  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {

    let caramochila = require('../Images/caramochila.jpg');
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}
              accessible={true}
              accessibilityLabel={'Imagem de Camiseta Masculina toque a baixo para fechar'}>
              <Text style={styles.modalText}></Text>
              <Image
                style={{ width: 150, height: 150 }}
                source={caramochila}
              />
              <Text style={{ color: "#442C2E", textAlign: "center" }}>Camiseta</Text>
              <Text style={{ color: "#442C2E", textAlign: "center" }}>R$29,90</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Sed do eiusmod tempor incididunt ut labore et dolore. </Text>
              <Pressable
                accessibilityComponentType="button"
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          accessible={true}
          accessibilityComponentType="button"
          accessibilityLabel={'Toque para ver mais detalhes sobre o produto'}
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
          <Text style={styles.textStyle}>Ver detalhes</Text>
        </Pressable>
      </View>
    );
  }
}
/*================================================================================== */
class Piazin extends Component {

  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {

    let piazin = require('../Images/piazin2.jpg');
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}
              accessible={true}
              accessibilityLabel={'Imagem de Conjunto kids Masculino toque a baixo para fechar'}>
              <Text style={styles.modalText}></Text>
              <Image
                style={{ width: 150, height: 150 }}
                source={piazin}
              />
              <Text style={{ color: "#442C2E", textAlign: "center" }}>Conjunto Kids</Text>
              <Text style={{ color: "#442C2E", textAlign: "center" }}>R$89,90</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Sed do eiusmod tempor incididunt ut labore et dolore. </Text>
              <Pressable
                accessibilityComponentType="button"
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          accessible={true}
          accessibilityComponentType="button"
          accessibilityLabel={'Toque para ver mais detalhes sobre o produto'}
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
          <Text style={styles.textStyle}>Ver detalhes</Text>
        </Pressable>
      </View>
    );
  }
}
/*====================================================================================== */
class Piazon extends Component {

  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {

    let piazon = require('../Images/piazin.jpg');
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}
              accessible={true}
              accessibilityLabel={'Imagem de Conjunto kids Masculino toque a baixo para fechar'}>
              <Text style={styles.modalText}></Text>
              <Image
                style={{ width: 150, height: 150 }}
                source={piazon}
              />
              <Text style={{ color: "#442C2E", textAlign: "center" }}>Conjunto Kids</Text>
              <Text style={{ color: "#442C2E", textAlign: "center" }}>R$89,90</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Sed do eiusmod tempor incididunt ut labore et dolore. </Text>
              <Pressable
                accessibilityComponentType="button"
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          accessible={true}
          accessibilityComponentType="button"
          accessibilityLabel={'Toque para ver mais detalhes sobre o produto'}
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
          <Text style={styles.textStyle}>Ver detalhes</Text>
        </Pressable>
      </View>
    );
  }
}
/*=========================================================================== */
class Gola extends Component {

  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {

    let gola = require('../Images/mocagolalta.jpg');
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}
              accessible={true}
              accessibilityLabel={'Imagem de Suéter gola alta toque a baixo para fechar'}>
              <Text style={styles.modalText}></Text>
              <Image
                style={{ width: 150, height: 150 }}
                source={gola}
              />
              <Text style={{ color: "#442C2E", textAlign: "center" }}>Suéter Gola Alta</Text>
              <Text style={{ color: "#442C2E", textAlign: "center" }}>R$89,90</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Sed do eiusmod tempor incididunt ut labore et dolore. </Text>
              <Pressable
                accessibilityComponentType="button"
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          accessible={true}
          accessibilityComponentType="button"
          accessibilityLabel={'Toque para ver mais detalhes sobre o produto'}
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
          <Text style={styles.textStyle}>Ver detalhes</Text>
        </Pressable>
      </View>
    );
  }
}
/*=========================================================================== */
class Tenis extends Component {

  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  render() {

    let tenis = require('../Images/tenis.jpg');
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}
              accessible={true}
              accessibilityLabel={'Imagem de Tênis toque a baixo para fechar'}>
              <Text style={styles.modalText}></Text>
              <Image
                style={{ width: 150, height: 150 }}
                source={tenis}
              />
              <Text style={{ color: "#442C2E", textAlign: "center" }}>Tênis</Text>
              <Text style={{ color: "#442C2E", textAlign: "center" }}>R$229,90</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
              <Text style={{ color: "#442C2E",textAlign: "center" }}>Sed do eiusmod tempor incididunt ut labore et dolore. </Text>
              <Pressable
                accessibilityComponentType="button"
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
              >
                <Text style={styles.textStyle}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          accessible={true}
          accessibilityComponentType="button"
          accessibilityLabel={'Toque para ver mais detalhes sobre o produto'}
          style={[styles.button, styles.buttonOpen]}
          onPress={() => this.setModalVisible(true)}
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        >
          <Text style={styles.textStyle}>Ver detalhes</Text>
        </Pressable>
      </View>
    );
  }
}
/* =========================================================================================================*/
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
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
    color: 'black',
    marginBottom: 15,
    textAlign: "center"
  }
});
export { Molde, Molda, Moldado, Mocaxdz, Saia, Mocaazul, Mocabranco, Peludo, Sobretudo, Camisa, Piazin, Piazon, Gola, Tenis};