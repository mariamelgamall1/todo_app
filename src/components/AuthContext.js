import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
   useEffect(()=>{
    const storedAuth=localStorage.getItem('isAuthenticated')
    if(storedAuth === 'true'){
      setIsAuthenticated('true')
    }
   },[]
   )
  const login = () => {
    localStorage.setItem('isAuthenticated','true')
    setIsAuthenticated(true);
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
