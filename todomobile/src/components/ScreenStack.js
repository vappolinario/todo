import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TodoApp from './TodoApp';
import LoginScreen from './LoginScreen';
import {useUserCredential} from '../contexts/AuthContext';

const Stack = createStackNavigator();

const SplashScreen = () => {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

const ScreenStack = () => {
  const {token} = useUserCredential();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token === undefined ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : token === '' ? (
          <Stack.Screen
            name="SignIn"
            component={LoginScreen}
            options={{title: 'Sign In', animationTypeForReplace: 'pop'}}
          />
        ) : (
          <Stack.Screen name="TaskList" component={TodoApp} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenStack;
