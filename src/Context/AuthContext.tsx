import React, { createContext, useContext, useState } from 'react';
import { Iauth } from '../../interface/api';

type conextType = {
  authStatus: Iauth;
  setAuthStatus: (val: Iauth) => void;
};

export const AuthContext = createContext<conextType>({} as conextType);

export const AuthProvider: React.FC = ({ children }) => {
  const [authStatus, setAuthStatus] = useState<Iauth>({} as Iauth);

  return (
    <AuthContext.Provider value={{ authStatus, setAuthStatus }}>{children}</AuthContext.Provider>
  );
};

export const useAuthValue = (): conextType => useContext(AuthContext);
