import React, { createContext, useContext, useState } from 'react';

type contextType = {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
};

export const ThemeTogglerContext = createContext<contextType>({
  isDark: false,
  setIsDark: isDark => console.log(isDark)
});

export const ThemeTogglerProvider: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeTogglerContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeTogglerContext.Provider>
  );
};

export const useThemeTogglerValue = (): contextType => useContext(ThemeTogglerContext);
