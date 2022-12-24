import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import {
  BleError,
  BleManager,
  Characteristic,
  Device,
} from '@config-plugins/react-native-ble-plx';
const bleManager = new BleManager();
 console.log(bleManager)
 //here
export default class App extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Hello, world!
        </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
