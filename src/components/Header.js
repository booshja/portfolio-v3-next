// dependencies
import React from 'react';
import { useTheme } from 'styled-components';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
// assets
import { faMountain } from '@fortawesome/free-solid-svg-icons';
// components
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
      <WebsiteNameContainer>
        <WebsiteName href="/">
          {`JacobAndes.${makeBreadcrumbs(router.pathname)}`}
        </WebsiteName>
      </WebsiteNameContainer>
      <Nav>
        <StyledNavLink href="/" passHref>
          {/* eslint-disable-next-line */}
          <a>.is()</a>
        </StyledNavLink>
        <StyledNavLink href="/experience" passHref>
          {/* eslint-disable-next-line */}
          <a>.experience()</a>
        </StyledNavLink>
        <StyledNavLink href="/about" passHref>
          {/* eslint-disable-next-line */}
          <a>.about()</a>
        </StyledNavLink>

        <StyledNavLink href="/contact" passHref>
          {/* eslint-disable-next-line */}
          <a>.contact()</a>
        </StyledNavLink>
        {/* <StyledNavLink href="/store">
        <a>
        .store()
        </a>
      </StyledNavLink> */}
        <NavButton onClick={() => dispatch(setNextTheme())}>
          <FontAwesomeIcon icon={faMountain} />
          {` ${theme.themeName}`}
        </NavButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
