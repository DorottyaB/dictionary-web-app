import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: {
      bg: '#FFFFFF',
      text: '#050505',
      inputBg: '#f4f4f4',
      iconColor: '#757575',
    },
    dark: {
      bg: '#050505',
      text: '#f4f4f4',
      inputBg: '#1f1f1f',
      iconColor: '#a44ce6',
    },
  });

  function toggleTheme() {
    setTheme({ ...theme, isLightTheme: !theme.isLightTheme });
  }

  const [font, setFont] = useState({ name: 'Roboto Serif, serif', type: 'Serif' });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, toggleTheme, font, setFont, isDropdownOpen, setIsDropdownOpen }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
