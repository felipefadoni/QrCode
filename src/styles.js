import {StyleSheet, Dimensions} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    height: Dimensions.get('window').height,
  },
  viewBtnsConfigs: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  textRedCenter20: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FF405C',
    marginTop: 32,
    marginBottom: 4,
  },

  textBaixoHeader: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
  },

  inputTextEndPoint: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginHorizontal: 16,
    borderColor: '#DBDBDB',
    borderWidth: 1,
    borderRadius: 100,
  },

  marginBottom16: {
    marginBottom: 16,
  },

  viewBtnSalvarDados: {
    marginHorizontal: 16,
  },

  btnSalvarDados: {
    backgroundColor: '#00FAC7',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 100,
  },

  textQrCodeHeaderModal: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 4,
  },

  textQRCode: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FF405C',
    marginBottom: 16,
  },
});
