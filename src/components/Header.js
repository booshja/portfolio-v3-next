// dependencies
import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
// components
import Image from 'next/image';
import Link from 'next/link';
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
  MobileMenuLink,
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
        <StyledNavLink
          href="https://importfrom.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          .blog()
        </StyledNavLink>
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
        <Link href="/" passHref>
          <MobileMenuLink logo>JacobAndes.dev</MobileMenuLink>
        </Link>
        <nav>
          <Link href="/" passHref>
            <MobileMenuLink>.is()</MobileMenuLink>
          </Link>
          <Link href="/experience" passHref>
            <MobileMenuLink>.experience()</MobileMenuLink>
          </Link>
          <Link href="/about" passHref>
            <MobileMenuLink>.about()</MobileMenuLink>
          </Link>
          <Link href="/contact" passHref>
            <MobileMenuLink>.contact()</MobileMenuLink>
          </Link>
          <MobileMenuLink href="https://www.importfrom.dev">
            .blog()
          </MobileMenuLink>
        </nav>
        <ThemeToggle />
      </MenuWrapper>
    </HeaderContainer>
  );
};

export default Header;
