import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TodoApp from './TodoApp';
import {useUserCredential} from '../contexts/AuthContext';

const Drawer = createDrawerNavigator();

const LogoutScreen = ({navigation}) => {
  const {setToken} = useUserCredential();
  useEffect(() => {
    navigation.navigate('SignIn');
    setToken('');
  });
  return (
    <View>
      <Text>Logout!</Text>
    </View>
  );
};

const ScreenStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tasks" component={TodoApp} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

export default ScreenStack;
