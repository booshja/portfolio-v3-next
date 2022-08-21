// dependencies
import React from 'react';
// components
import Copyright from './Copyright';
import Header from './Header';
import Socials from './Socials';

const PublicLayout = ({ children }) => (
  <>
    <Header />
    <Socials />
    {children}
    <Copyright />
  </>
);

export default PublicLayout;
