// dependencies
import { useEffect, useState, useContext } from 'react';
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
    <HeaderContainer data-test="header-container">
      <WebsiteNameContainer data-test="name-container">
        <WebsiteName href="/" data-test="logo-link">
          {`JacobAndes.${makeBreadcrumbs(router.pathname)}`}
        </WebsiteName>
      </WebsiteNameContainer>
      <Nav data-test="desktop-nav" role="navigation">
        <StyledNavLink href="/" data-test="is-nav-link">
          .is()
        </StyledNavLink>
        <StyledNavLink href="/experience" data-test="experience-nav-link">
          .experience()
        </StyledNavLink>
        <StyledNavLink href="/about" data-test="about-nav-link">
          .about()
        </StyledNavLink>
        <StyledNavLink href="/contact" data-test="contact-nav-link">
          .contact()
        </StyledNavLink>
        <StyledExternalNavLink
          href="https://importfrom.dev"
          target="_blank"
          rel="noopener noreferrer"
          data-test="blog-external-nav-link"
        >
          .blog()
        </StyledExternalNavLink>
        <ThemeToggle />
      </Nav>
      <MobileMenuButton
        type="button"
        onClick={handleMenuOpen}
        data-test="mobile-menu-button"
        aria-expanded={open ? 'true' : 'false'}
        aria-controls="mobile-menu"
      >
        <Image
          src={colorMode === 'light' ? MountainLight : MountainDark}
          alt="Mountain icon denoting mobile menu"
          layout="fixed"
          height={30}
          width={30}
          data-test="hamburger-button"
        />
      </MobileMenuButton>
      <MenuWrapper open={open} id="mobile-menu" data-test="mobile-menu-wrapper">
        <ClosingXButton
          onClick={() => setOpen((o) => !o)}
          data-test="closing-button"
        >
          X
        </ClosingXButton>
        <MobileMenuLink href="/" logo="true" data-test="mobile-logo-link">
          JacobAndes.dev
        </MobileMenuLink>
        <nav data-test="mobile-nav" role="navigation">
          <MobileMenuLink href="/" data-test="is-mobile-nav-link">
            .is()
          </MobileMenuLink>
          <MobileMenuLink
            href="/experience"
            data-test="experience-mobile-nav-link"
          >
            .experience()
          </MobileMenuLink>
          <MobileMenuLink href="/about" data-test="about-mobile-nav-link">
            .about()
          </MobileMenuLink>
          <MobileMenuLink href="/contact" data-test="contact-mobile-nav-link">
            .contact()
          </MobileMenuLink>
          <MobileMenuExternalLink
            href="https://www.importfrom.dev"
            data-test="blog-external-mobile-nav-link"
          >
            .blog()
          </MobileMenuExternalLink>
        </nav>
        <ThemeToggle />
      </MenuWrapper>
    </HeaderContainer>
  );
};

export default Header;
