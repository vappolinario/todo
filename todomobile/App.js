import 'react-native-gesture-handler';
import React from 'react';
import AuthProvider from './src/contexts/AuthContext';
import ScreenStack from './src/components/ScreenStack';

const App = () => {
  return (
    <AuthProvider>
      <ScreenStack />
    </AuthProvider>
  );
};

export default App;
