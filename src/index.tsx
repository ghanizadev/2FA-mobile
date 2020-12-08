import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Main';
import Scan from './pages/Scan';
import Login from './pages/Login';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const Stack = createStackNavigator();

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{header: () => null}}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{header: () => null}}
            name="Main"
            component={Main}
          />
          <Stack.Screen
            options={{header: () => null}}
            name="Scan"
            component={Scan}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
