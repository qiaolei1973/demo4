import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Vibration,
  View,
  Modal
} from 'react-native';
import BarcodeScanner from 'react-native-barcodescanner';
import * as STA from '../Util/static';

const {CAMERA_TYPE, TORCH_MODE} = STA;

const Scanner = ({barcodeReceived}) =>
  <View style={styles.container}>
    <BarcodeScanner
      onBarCodeRead={barcodeReceived}
      style={{ flex: 1 }}
      torchMode={TORCH_MODE}
      cameraType={CAMERA_TYPE}
      />
  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green'
  },
  statusBar: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBarText: {
    fontSize: 20,
  },
});

export default Scanner;

