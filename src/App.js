import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Modal,
  Alert,
} from 'react-native';

import Axios from 'axios';
import QRCodeScanner from 'react-native-qrcode-scanner';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import Opcoes from './Opcoes';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      success: false,
      qrcode: '',
      viewModal: false,
      urlSend: '',
      variavelName: '',
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  componentDidUpdate = () => {
    this.getData();
  };

  onSuccess = e => {
    console.log(e);
    this.setState({success: true, qrcode: e.data, viewModal: true});
  };

  changeUrlSend = valor => {
    this.setState({urlSend: valor});
  };

  getData = async () => {
    try {
      const endPoint = await AsyncStorage.getItem('@endPoint');
      const variavelJson = await AsyncStorage.getItem('@variavelJson');
      if (endPoint !== null && this.state.urlSend !== endPoint) {
        this.setState({urlSend: endPoint});
        console.log(endPoint);
      }
      if (variavelJson !== null && this.state.variavelName !== variavelJson) {
        this.setState({variavelName: variavelJson});
        console.log(variavelJson);
      }
    } catch (e) {
      Alert.alert('Atenção!', 'Erro ao buscar os dados salvos!');
    }
  };

  sendApi = async () => {
    var sendVar = {};
    sendVar[this.state.variavelName] = this.state.qrcode;
    await Axios.post(this.state.urlSend, sendVar)
      .then(response => {
        console.log(response);
        Alert.alert('Sucesso!', 'QRCode foi enviado com sucesso!');
        this.setState({
          success: false,
          qrcode: '',
          viewModal: false,
        });
      })
      .catch(error => {
        console.log(error);
        Alert.alert(
          'Erro!',
          'Erro ao enviar o QR Code!' + JSON.stringify(error.response),
        );
        this.setState({
          success: false,
          qrcode: '',
          viewModal: false,
        });
      });
  };

  render() {
    return (
      <>
        <Modal
          visible={this.state.viewModal}
          animationType="slide"
          transparent={false}
          onRequestClose={() => {
            this.setState({success: false, url: '', viewModal: false});
          }}>
          <Text style={styles.textQrCodeHeaderModal}>
            Leitor QR Code Ativado
          </Text>
          <Text style={styles.textQRCode}>{this.state.qrcode}</Text>
          <View style={styles.viewBtnSalvarDados}>
            <TouchableOpacity
              onPress={this.sendApi}
              style={styles.btnSalvarDados}>
              <Text>Enviar QRCode</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
        <View style={styles.container}>
          <View>
            <QRCodeScanner
              onRead={this.onSuccess}
              showMarker={true}
              checkAndroid6Permissions={true}
              cameraStyle={styles.cameraContainer}
              reactivate={true}
              reactivateTimeout={60}
              ref={elem => {
                this.scanner = elem;
              }}
            />
          </View>
        </View>
        <Opcoes {...this.props} />
      </>
    );
  }
}
