// dependencies
import styled from 'styled-components';
import { breakpoints, breakpointValues } from '../../styles/breakpoints';

// eslint-disable-next-line
const { tabletSm, tabletLg, desktopSm, desktopLg } = breakpointValues;

/** Generics ******************************************* */
const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

/** Containers ***************************************** */
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  max-width: 100vw;
  padding: 0 2rem;
  background-color: transparent;
  color: var(--color-text-primary);
  z-index: 100;

  ${breakpoints('padding', '', [{ [desktopLg]: '0 3rem 0 3rem' }])}
`;

const Nav = styled.nav`
  display: none;
  align-items: center;
  justify-content: space-between;
  width: 45%;

  ${breakpoints('display', '', [{ [tabletSm]: 'flex' }])};
  ${breakpoints('width', '', [
    { [tabletSm]: '65%' },
    { [tabletLg]: '55%' },
    { [desktopSm]: '45%' },
    { [desktopLg]: '575px' },
  ])};
`;

const SocialsContainer = styled.aside`
  display: none;
  position: fixed;
  left: 1rem;
  top: calc(50vh - 237.5px);
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40px;
  padding: 1rem 0 5rem 0;
  background-color: transparent;

  ${breakpoints('display', '', [{ [tabletSm]: 'flex' }])};

  a {
    font-size: 2.4rem;
    margin-bottom: 2rem;
    color: var(--color-text-primary);

    &:hover {
      filter: brightness(90%);
    }

    &:focus-visible {
      outline: 1px solid var(--color-text-secondary);
    }
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${(p) => (p.size ? `${p.size}rem` : '10rem')};
  color: var(--color-text-primary);
  align-items: center;
`;

const WebsiteNameContainer = styled.div`
  flex-basis: 25%;
`;

/** Accent Div's *************************************** */
const VerticalAccentDiv = styled.div`
  width: 2px;
  height: 200px;
  background-color: var(--color-accent);
  margin-bottom: 2rem;
`;

const MenuWrapper = styled.div`
  position: fixed;
  overflow: hidden;
  top: ${({ open }) => (open ? '0' : '-100%')};
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100vh;
  transition: all 300ms ease-in-out;
  padding: 3rem;
  background-color: var(--color-bg-primary);
  display: flex;
  flex-direction: column;

  nav {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    padding-block: 3rem;
    height: 66.6%;
  }
`;

export {
  ColumnFlex,
  HeaderContainer,
  MenuWrapper,
  Nav,
  SocialsContainer,
  SpinnerContainer,
  WebsiteNameContainer,
  VerticalAccentDiv,
};
