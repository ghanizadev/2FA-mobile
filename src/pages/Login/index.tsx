import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import authentication from '../../services/authentication';

import {styles} from './styles';

const Login: React.FC<{navigation: any}> = (props) => {
  const {navigation} = props;

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    authentication
      .login(email, password)
      .then(() => {
        navigation.push('Main');
      })
      .catch((body) => {
        Alert.alert(body.error, body.message);
      });
  };

  const handleChangeEmail = setEmail;
  const handleChangePassword = setPassword;

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.background}
        colors={[
          'rgba(91,50,135,1)',
          'rgba(152,12,156,1)',
          'rgba(146,73,255,1)',
        ]}
        locations={[0, 0.35, 1]}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Mobile App</Text>
        </View>
        <View style={styles.content}>
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Email"
            style={styles.input}
            onChangeText={handleChangeEmail}
          />
          <TextInput
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={handleChangePassword}
            style={styles.input}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.small}>ghanizadev, 2020</Text>
      </LinearGradient>
    </View>
  );
};

export default Login;
