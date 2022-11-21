// dependencies
import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
// components
import Image from 'next/legacy/image';
import ThemeToggle from './ThemeToggle';
import {
  HeaderContainer,
  MenuWrapper,
  Nav,
  WebsiteNameContainer,
} from './styles/containers';
import {
  WebsiteName,
  StyledNavLink,
  StyledExternalNavLink,
  MobileMenuLink,
  MobileMenuExternalLink,
} from './styles/typography';
import { ClosingXButton, MobileMenuButton } from './styles/buttons';
// context
import { ThemeContext } from '../context/themeContext';
// assets
import MountainDark from '../../public/images/mountain-dark.svg';
import MountainLight from '../../public/images/mountain-light.svg';

const Header = ({ notFound }) => {
  const router = useRouter();
  const { colorMode } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  const handleMenuOpen = () => {
    setOpen((o) => !o);
  };

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
        <StyledNavLink href="/">.is()</StyledNavLink>
        <StyledNavLink href="/experience">.experience()</StyledNavLink>
        <StyledNavLink href="/about">.about()</StyledNavLink>
        <StyledNavLink href="/contact">.contact()</StyledNavLink>
        <StyledExternalNavLink
          href="https://importfrom.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          .blog()
        </StyledExternalNavLink>
        <ThemeToggle />
      </Nav>
      <MobileMenuButton type="button" onClick={handleMenuOpen}>
        <Image
          src={colorMode === 'light' ? MountainLight : MountainDark}
          alt="Mountain icon denoting mobile menu"
          layout="fixed"
          height={30}
          width={30}
        />
      </MobileMenuButton>
      <MenuWrapper open={open}>
        <ClosingXButton onClick={() => setOpen((o) => !o)}>X</ClosingXButton>
        <MobileMenuLink href="/" logo>
          JacobAndes.dev
        </MobileMenuLink>
        <nav>
          <MobileMenuLink href="/">.is()</MobileMenuLink>
          <MobileMenuLink href="/experience">.experience()</MobileMenuLink>
          <MobileMenuLink href="/about">.about()</MobileMenuLink>
          <MobileMenuLink href="/contact">.contact()</MobileMenuLink>
          <MobileMenuExternalLink href="https://www.importfrom.dev">
            .blog()
          </MobileMenuExternalLink>
        </nav>
        <ThemeToggle />
      </MenuWrapper>
    </HeaderContainer>
  );
};

export default Header;
