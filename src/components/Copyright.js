// dependencies
import React from 'react';
import { CopyrightText } from './styles/typography';

const Copyright = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer>
      <CopyrightText>
        Copyright &copy; 2020-{thisYear} - jacobandes.dev
      </CopyrightText>
    </footer>
  );
};

export default Copyright;
