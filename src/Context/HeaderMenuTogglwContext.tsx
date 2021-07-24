import React, { createContext, useContext, useState } from 'react';

type contextType = {
  showMenu: boolean;
  setShowMenu: (val: boolean) => void;
};

export const HeaderMenuToggleContext = createContext<contextType>({} as contextType);

export const HeaderMenuToggleProvider: React.FC = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <HeaderMenuToggleContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </HeaderMenuToggleContext.Provider>
  );
};

export const useHeaderMenuToggleValue = (): contextType => useContext(HeaderMenuToggleContext);
