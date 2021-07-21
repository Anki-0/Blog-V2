import React, { createContext, useContext, useState } from 'react';

type stateType = {
  SignInModel: boolean;
  SignUpModel: boolean;
};
type contextType = {
  showAuthModel: stateType;
  setShowAuthModel: (val: stateType) => void;
};

export const AuthModelToggleContext = createContext<contextType>({} as contextType);

export const AuthModelToggleProvider: React.FC = ({ children }) => {
  const [showAuthModel, setShowAuthModel] = useState<stateType>({
    SignInModel: false,
    SignUpModel: false
  });

  return (
    <AuthModelToggleContext.Provider value={{ showAuthModel, setShowAuthModel }}>
      {children}
    </AuthModelToggleContext.Provider>
  );
};

export const useAuthModelToggleValue = (): contextType => useContext(AuthModelToggleContext);
