// dependencies
import React from 'react';
import { useRouter } from 'next/router';
// components
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import {
  HeaderContainer,
  Nav,
  WebsiteNameContainer,
} from './styles/containers';
import { WebsiteName, StyledNavLink } from './styles/typography';

const Header = ({ notFound }) => {
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
          href="https://importfrom.blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          .blog()
        </StyledNavLink>
        {/* <Link href="/store" passHref>
          <StyledNavLink href="/store">.store()</StyledNavLink>
        </Link> */}
        <ThemeToggle />
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
