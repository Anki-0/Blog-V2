import React, { createContext, useContext, useState } from 'react';

type contextType = {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
};

export const ThemeTogglerContext = createContext<contextType>({} as contextType);

export const ThemeTogglerProvider: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeTogglerContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeTogglerContext.Provider>
  );
};

export const useThemeTogglerValue = (): contextType => useContext(ThemeTogglerContext);
