/* eslint-disable */
// dependencies
import styled from 'styled-components';

const NavButton = styled.button`
  font-size: 1.8rem;
  background-color: transparent;
  color: var(--color-text-primary);
  text-transform: lowercase;
  border: none;
  margin-left: 0.75rem;
  display: flex;

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

export { NavButton };
