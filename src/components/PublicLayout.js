// dependencies
import React from 'react';
import { useSelector } from 'react-redux';
// styles
import { ThemeProvider } from 'styled-components';
// components
import Copyright from './Copyright';
import Header from './Header';
import Socials from './Socials';
// state
import { selectTheme } from '../redux/slices/themeSlice';

const PublicLayout = ({ children }) => {
  const currentTheme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={currentTheme}>
      <Header />
      <Socials />
      {children}
      <Copyright />
    </ThemeProvider>
  );
};

export default PublicLayout;
