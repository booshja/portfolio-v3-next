// dependencies
import React from 'react';
// assets
import { faPaw } from '@fortawesome/free-solid-svg-icons';
// components
import Script from 'next/script';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoadingText } from './styles/typography';
import { SpinnerContainer } from './styles/containers';

const LoadingSpinner = ({ size }) => (
  <SpinnerContainer size={size}>
    <Script
      src="https://kit.fontawesome.com/396432886d.js"
      crossOrigin="anonymous"
    />
    <FontAwesomeIcon icon={faPaw} spin />
    <LoadingText>Loading&hellip;</LoadingText>
  </SpinnerContainer>
);

export default LoadingSpinner;
