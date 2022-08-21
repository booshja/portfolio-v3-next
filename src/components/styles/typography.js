// dependencies
import styled from 'styled-components';
// components
import { breakpoints, breakpointValues } from '../../styles/breakpoints';

// eslint-disable-next-line
const { mobileSm, mobileLg, tabletSm, tabletLg, desktopSm, desktopLg } =
  breakpointValues;

/** Text *********************************************** */
const LoadingText = styled.p`
  color: var(--color-text-primary);
  font-size: 3rem;
  margin-top: 2rem;
`;

const CopyrightText = styled.p`
  color: var(--color-text-primary);
  font-size: 1rem;
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  ${breakpoints('font-size', 'rem', [{ [desktopSm]: 1.2 }])}
`;

const FollowMe = styled.p`
  color: var(--color-text-primary);
  font-size: 2rem;
  transform: rotate(-90deg);
  width: 100px;
  margin-top: 4rem;
`;

/** Links ********************************************** */
const BaseLink = styled.a`
  font-family: Poppins, sans-serif;
  font-weight: 700;
  color: var(--color-text-primary);

  &:hover {
    filter: brightness(60%);
  }

  &:focus-visible {
    outline: 1px solid var(--color-text-secondary);
  }
`;

const WebsiteName = styled(BaseLink)`
  font-size: 2rem;
  text-decoration: none;
`;

const ResultLink = styled(BaseLink)`
  font-size: 3rem;
  text-decoration: underline;
`;

const StyledNavLink = styled.a`
  font-family: Sen, sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  text-decoration: none;
  color: var(--color-text-primary);
  transition: border-bottom ease-in-out 0.1s;

  &.active {
    font-weight: 700;
    font-size: 2rem;
  }

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 1px solid var(--color-text-secondary);
  }
`;

/** Headers ******************************************** */
const ResultText = styled.h2`
  color: var(--color-text-primary);
  font-size: 3rem;
  margin: 2rem 0;
`;

export {
  CopyrightText,
  FollowMe,
  LoadingText,
  ResultLink,
  ResultText,
  StyledNavLink,
  WebsiteName,
};
