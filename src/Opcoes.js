import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './styles';

export default function src(props) {
  return (
    <View style={styles.viewBtnsConfigs}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <Text>QRCode</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Configuracao')}>
        <Text>Configurações</Text>
      </TouchableOpacity>
    </View>
  );
}
