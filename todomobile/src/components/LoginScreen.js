import React, {useCallback} from 'react';
import {Button, Text, View, TextInput} from 'react-native';
import {useUserCredential} from '../contexts/AuthContext';
import {login} from '../clients/authclient';

const LoginScreen = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    setToken,
  } = useUserCredential();

  const handleLogin = useCallback(() => {
    login(username, password, (data) => {
      setToken(data);
    });
  }, [password, username, setToken]);

  return (
    <View>
      <Text>Todo App</Text>
      <View>
        <TextInput
          placeholder="username"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View>
        <TextInput
          secureTextEntry
          placeholder="password"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View>
        <Button onPress={handleLogin} title="Login" />
      </View>
    </View>
  );
};

export default LoginScreen;
