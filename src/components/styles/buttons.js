/* eslint-disable */
// dependencies
import styled from 'styled-components';
import { breakpoints, breakpointValues } from '../../styles/breakpoints';
const { tabletSm } = breakpointValues;

const NavButton = styled.button`
  font-size: 2.6rem;
  background-color: transparent;
  color: var(--color-text-primary);
  text-transform: lowercase;
  border: none;
  margin-left: 0.75rem;
  display: flex;
  align-self: center;
  width: 110px;

  ${breakpoints('font-size', 'rem', [{ [tabletSm]: 1.8 }])}

  svg {
    color: var(--color-text-primary);
  }

  &:hover {
    cursor: pointer;
  }

  &:focus-visible {
    outline: 1px solid var(--color-text-secondary);
  }
`;

const MobileMenuButton = styled.button`
  border: 0;
  background: transparent;
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${breakpoints('display', '', [{ [tabletSm]: 'none' }])}
`;

const ClosingXButton = styled.button`
  border: 0;
  background-color: transparent;
  color: var(--color-text);
  font-size: 3rem;
  position: absolute;
  top: 2rem;
  right: 3rem;
`;

export { ClosingXButton, MobileMenuButton, NavButton };
