import React from 'react';
import {View, Alert} from 'react-native';
import QRCodeScanner, {Event} from 'react-native-qrcode-scanner';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import CameraTop from '../../components/CameraTop';
import authentication from '../../services/authentication';

const Scan: React.FC<{navigation: any}> = (props) => {
  const {navigation} = props;

  const handleSuccess = async (e: Event) => {
    authentication
      .authorizeApp(e.data)
      .then(() => {
        navigation.pop();
      })
      .catch((body) => {
        Alert.alert(body.error, body.message);
      });
  };
  return (
    <View style={styles.cameraContainer}>
      <LinearGradient
        style={styles.cameraContainer}
        colors={[
          'rgba(91,50,135,1)',
          'rgba(152,12,156,1)',
          'rgba(146,73,255,1)',
        ]}
        locations={[0, 0.35, 1]}>
        <QRCodeScanner
          onRead={handleSuccess}
          reactivate
          reactivateTimeout={1000}
          topContent={<CameraTop />}
        />
      </LinearGradient>
    </View>
  );
};

export default Scan;
