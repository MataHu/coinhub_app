import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import Camera from 'react-native-camera';

export default class QrCode extends Component {

  onBarCodeRead = (data) => {
    var result = JSON.parse(data.data);
    console.log(result);
  }

  render() {
    return (
        <View style={styles.container}>
          <Camera
              ref={(cam) => {
                this.camera = cam;
              }}
              style={styles.preview}
              aspect={Camera.constants.Aspect.fill}>
              onBarCodeRead={this.onBarCodeRead}
          </Camera>
        </View>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
        .then((data) => console.log(data))
        .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});