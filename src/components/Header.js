// dependencies
import React from 'react';
import { useTheme } from 'styled-components';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
// assets
import { faMountain } from '@fortawesome/free-solid-svg-icons';
// components
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  HeaderContainer,
  Nav,
  WebsiteNameContainer,
} from './styles/containers';
import { WebsiteName, StyledNavLink } from './styles/typography';
import { NavButton } from './styles/buttons';
// state
import { setNextTheme } from '../redux/slices/themeSlice';

const Header = ({ notFound }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const router = useRouter();

  const makeBreadcrumbs = (pathname) => {
    if (notFound) return 'notFound()';
    if (pathname === '/') return 'is()';

    const slicedPath = pathname.slice(1);
    const splitPath = slicedPath.split('/');
    let breadcrumbs = `${splitPath[0]}()`;
    if (splitPath.length > 1) {
      for (let i = 1; i < splitPath.length; i + 1) {
        breadcrumbs = `${breadcrumbs}.${splitPath[i]}`;
      }
    }

    return breadcrumbs;
  };

  return (
    <HeaderContainer>
      <Script
        src="https://kit.fontawesome.com/396432886d.js"
        crossOrigin="anonymous"
      />
      <WebsiteNameContainer>
        <Link passHref href="/">
          <WebsiteName>
            {`JacobAndes.${makeBreadcrumbs(router.pathname)}`}
          </WebsiteName>
        </Link>
      </WebsiteNameContainer>
      <Nav>
        <Link passHref href="/">
          <StyledNavLink>.is()</StyledNavLink>
        </Link>
        <Link passHref href="/experience">
          <StyledNavLink>.experience()</StyledNavLink>
        </Link>
        <Link href="/about" passHref>
          <StyledNavLink>.about()</StyledNavLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledNavLink>.contact()</StyledNavLink>
        </Link>
        {/* <Link href="/store" passHref>
          <StyledNavLink href="/store">.store()</StyledNavLink>
        </Link> */}
        <NavButton onClick={() => dispatch(setNextTheme())}>
          <FontAwesomeIcon icon={faMountain} fontSize="inherit" />
          {` ${theme.themeName}`}
        </NavButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
