import React, { createContext, useState, useContext } from 'react';

export const TokenContext = createContext();

export default function TokenProvider ({ children }) {
    const [token, setToken] = useState();
    const [authenticated, setAuthenticated] = useState(false);
    return (
        <TokenContext.Provider
            value={{
                token,
                setToken,
                authenticated,
                setAuthenticated
            }}
        >
            {children}
        </TokenContext.Provider>
    )
};

export function useToken() {
    const context = useContext(TokenContext);
    const { token, setToken, authenticated, setAuthenticated } = context;
    return { token, setToken, authenticated, setAuthenticated };
};
