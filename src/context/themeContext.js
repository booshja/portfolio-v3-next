// dependencies
import { useState, createContext, useEffect } from 'react';
// style constants
import { COLORS, THEMES, FONTS } from '../styles/constants';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState(undefined);
  const [themeNumber, rawSetThemeNumber] = useState(undefined);

  useEffect(() => {
    const root = window.document.documentElement;

    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode',
    );
    const initialThemeNum = root.style.getPropertyValue(
      '--initial-color-mode-num',
    );

    rawSetColorMode(initialColorValue);

    rawSetThemeNumber(+initialThemeNum);
  }, []);

  const setNextColorMode = () => {
    const root = window.document.documentElement;
    let newValue;
    let newNumber;

    if (themeNumber === 3) {
      newValue = 'light';
      newNumber = 0;
    } else {
      newValue = THEMES[themeNumber + 1];
      newNumber = themeNumber + 1;
    }

    rawSetColorMode(newValue);
    rawSetThemeNumber(newNumber);
    localStorage.setItem('color-mode', newValue);
    Object.entries(COLORS).forEach(([name, colorByTheme]) => {
      const cssVarName = `--color-${name}`;

      root.style.setProperty(cssVarName, colorByTheme[newValue]);
    });
    Object.entries(FONTS).forEach(([name, value]) => {
      const cssVarName = `--font-${name}`;

      root.style.setProperty(cssVarName, value);
    });
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={{ colorMode, setNextColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
