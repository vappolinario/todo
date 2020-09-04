import React, {useState, createContext, useContext} from 'react';

export const AuthContext = createContext();

export default function AuthProvider({children}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  return (
    <AuthContext.Provider
      value={{
        password,
        username,
        setPassword,
        setUsername,
        token,
        setToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useUserCredential() {
  const context = useContext(AuthContext);
  const {
    password,
    username,
    setPassword,
    setUsername,
    token,
    setToken,
  } = context;
  return {
    password,
    username,
    setPassword,
    setUsername,
    token,
    setToken,
  };
}
