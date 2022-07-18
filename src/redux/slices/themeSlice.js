/* eslint-disable */

// dependencies
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
// styles
import { COLORS, THEMES } from '../../styles/constants';

const getInitial = (param) => {
  const root = window.document.documentElement;
  const initialColorValue = root.style.getPropertyValue('--initial-color-mode');
  if (param === 'theme') {
    return (
      initialColorValue.charAt(0).toUpperCase() + initialColorValue.slice(1)
    );
  }

  if (initialColorValue === 'light') return 0;
  if (initialColorValue === 'dark') return 1;
  if (initialColorValue === 'soft') return 2;
  if (initialColorValue === 'sharp') return 3;
};

// const initialState = {
//   themeNumber:
// }

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    themeNumber: undefined,
    colorMode: undefined,
  },
  reducers: {
    setNextTheme: (state) => {
      let nextTheme;
      let nextThemeNum;

      if (state.themeNumber === 3) {
        nextThemeNum = 0;
        nextTheme = THEMES[0];
      } else {
        nextTheme = THEMES[state.themeNumber + 1];
        nextThemeNum = state.themeNumber + 1;
      }

      state.colorMode = nextTheme;
      state.themeNumber = nextThemeNum;

      const root = window.document.documentElement;
      localStorage.setItem('color-mode', nextTheme);
      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`;

        root.style.setProperty(cssVarName, colorByTheme[nextTheme]);
      });
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      // console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload.subject,
      };
    },
  },
});

export const { setNextTheme } = themeSlice.actions;
export const selectColorMode = (state) => state.reducer.theme.colorMode;

export default themeSlice.reducer;
