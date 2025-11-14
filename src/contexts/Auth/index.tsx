"use client";
import React, { createContext, useState } from "react";

interface IAuthContext {
  isAuthenticated: boolean;
  setIsAuthenticated: (_param: boolean) => void;
}

const initialState: IAuthContext = {
  isAuthenticated: false,
  setIsAuthenticated: (_param: boolean) => null,
};

const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
