'use client'
import { FC, useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

interface AuthProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const AuthContextProvider: FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState('Client')
  
    const login = () => {
      // Lógica de inicio de sesión
      setIsAuthenticated(true);
    };
  
    const logout = () => {
      // Lógica de cierre de sesión
      setIsAuthenticated(false);
    };
  
    return (
      <AuthContext.Provider value={{ login, logout, isAuthenticated, user }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const UserAuth = () => {
    return useContext(AuthContext)
  }