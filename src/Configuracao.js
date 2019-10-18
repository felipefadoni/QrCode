import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import Opcoes from './Opcoes';

export default class Configuracao extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urlEndPoint: '',
      variavelJson: '',
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  onChangeTextUrlApi = valor => {
    this.setState({urlEndPoint: valor});
  };

  onChangeTextVariavelJson = valor => {
    this.setState({variavelJson: valor});
  };

  getData = async () => {
    try {
      const endPoint = await AsyncStorage.getItem('@endPoint');
      const variavelJson = await AsyncStorage.getItem('@variavelJson');
      if (endPoint !== null) {
        this.setState({urlEndPoint: endPoint});
      }
      if (variavelJson !== null) {
        this.setState({variavelJson: variavelJson});
      }
    } catch (e) {
      Alert.alert('Atenção!', 'Erro ao buscar os dados salvos!');
    }
  };

  salvaData = async () => {
    try {
      await AsyncStorage.setItem('@endPoint', this.state.urlEndPoint);
      await AsyncStorage.setItem('@variavelJson', this.state.variavelJson);
      Alert.alert('SUCESSO!', 'Os dados foram salvos!');
    } catch (e) {
      Alert.alert('Atenção!', 'Erro ao salvar os dados!');
    }
  };

  handleBtnSalvar = () => {
    this.salvaData();
  };

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
        <View style={styles.container}>
          <View>
            <Text style={styles.textRedCenter20}>Configuração de Ambiente</Text>
            <Text style={styles.textBaixoHeader}>
              A requisição enviada é POST
            </Text>
          </View>
          <View style={styles.marginBottom16}>
            <TextInput
              placeholder="https://seusistema.com.br/seuendpoint"
              value={this.state.urlEndPoint}
              onChangeText={this.onChangeTextUrlApi}
              style={styles.inputTextEndPoint}
            />
          </View>
          <View style={styles.marginBottom16}>
            <TextInput
              placeholder="Variavel para ser enviada no JSON"
              value={this.state.variavelJson}
              onChangeText={this.onChangeTextVariavelJson}
              style={styles.inputTextEndPoint}
            />
          </View>
          <View style={styles.viewBtnSalvarDados}>
            <TouchableOpacity
              style={styles.btnSalvarDados}
              onPress={this.handleBtnSalvar}>
              <Text>Salvar Dados</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Opcoes {...this.props} />
      </>
    );
  }
}
