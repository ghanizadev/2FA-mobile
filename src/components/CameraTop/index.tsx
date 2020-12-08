import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const CameraTop = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan the QR Code</Text>
    </View>
  );
};

export default CameraTop;
