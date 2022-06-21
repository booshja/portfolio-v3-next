/* eslint-disable */

// dependencies
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
// styles
import { THEMES, lightTheme } from '../../styles/themes';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    themeNumber: 0,
    currentTheme: lightTheme,
  },
  reducers: {
    setNextTheme: (state) => {
      if (state.themeNumber === 3) {
        state.themeNumber = 0;
        state.currentTheme = THEMES[0];
        localStorage.setItem('theme', 'Light');
      } else {
        localStorage.setItem('theme', THEMES[state.themeNumber + 1].themeName);
        state.currentTheme = THEMES[state.themeNumber + 1];
        state.themeNumber += 1;
      }
    },
    setThemeNumber: (state, action) => {
      state.themeNumber = action.payload;
    },
    setCurrentTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload.subject,
      };
    },
  },
});

export const { setNextTheme, setThemeNumber, setCurrentTheme } =
  themeSlice.actions;
export const selectTheme = (state) => state.reducer.theme.currentTheme;

export default themeSlice.reducer;
