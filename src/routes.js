import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import App from './App';
import ConfiguracaoScreen from './Configuracao';

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
    navigationOptions: {
      header: null,
    },
  },
  Configuracao: {
    screen: ConfiguracaoScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(AppNavigator);
