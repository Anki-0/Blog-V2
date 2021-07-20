import React, { createContext, useContext, useState } from 'react';

type contextType = {
  showSignin: boolean;
  setShowSignin: (val: boolean) => void;
};

export const SigninComponentToggleContext = createContext<contextType>({
  showSignin: false,
  setShowSignin: showSignin => console.log(`SignIn Show => ${showSignin}`)
});

export const SigninComponentToggleProvider: React.FC = ({ children }) => {
  const [showSignin, setShowSignin] = useState(false);

  return (
    <SigninComponentToggleContext.Provider value={{ showSignin, setShowSignin }}>
      {children}
    </SigninComponentToggleContext.Provider>
  );
};

export const useSigninComponentToggleValue = (): contextType =>
  useContext(SigninComponentToggleContext);
