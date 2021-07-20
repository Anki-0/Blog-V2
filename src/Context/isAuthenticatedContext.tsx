import React, { createContext, useContext, useState } from 'react';
import { IcheckAuth } from '../../interface/api';

type conextType = {
  isAuthenticated: IcheckAuth;
  setIsAuthenticated: (val: IcheckAuth) => void;
};

export const isAuthenticatedContext = createContext<conextType>({} as conextType);

export const IsAuthenticatedProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<IcheckAuth>({} as IcheckAuth);

  return (
    <isAuthenticatedContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </isAuthenticatedContext.Provider>
  );
};

export const useIsAuthenticatedValue = (): conextType => useContext(isAuthenticatedContext);
