import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Avatar from '../../components/Avatar';
import {User} from '../../redux/types/User';
import {State} from '../../redux/types/State';
import {useDispatch, useSelector} from 'react-redux';

import {styles} from './styles';
import { actions } from '../../redux/store';

const Main: React.FC<{navigation: any}> = (props) => {
  const {navigation} = props;
  const user = useSelector<State, User>((state) => state.user);
  const dispatch = useDispatch();

  const handleOpenScanner = () => {
    navigation.push('Scan');
  };

  const handleQuit = () => {
    dispatch(actions.clearState())
    BackHandler.exitApp();
  };

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
        <View style={styles.content}>
          <Avatar source={user.avatar} />
          <Text style={styles.name}>Hello {user.name}!</Text>
          <TextInput
            placeholder="Name"
            style={styles.input}
            defaultValue={user.name}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            defaultValue={user.email}
          />
          <TouchableOpacity style={styles.button} onPress={handleOpenScanner}>
            <Text style={styles.buttonText}>AUTHORIZE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleQuit}>
            <Text style={styles.buttonText}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.small}>ghanizadev, 2020</Text>
      </LinearGradient>
    </View>
  );
};

export default Main;
