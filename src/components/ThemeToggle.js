// dependencies
import { useContext } from 'react';
// assets
import { faMountain } from '@fortawesome/free-solid-svg-icons';
// components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavButton } from './styles/buttons';
// context
import { ThemeContext } from '../context/themeContext';

const ThemeToggle = () => {
  const { colorMode, setNextColorMode } = useContext(ThemeContext);

  if (!colorMode) return null;

  return (
    <NavButton
      id="theme-toggle"
      aria-label="Button to change the color mode between light, dark, sharp, and soft themes."
      onClick={() => setNextColorMode()}
      type="button"
    >
      <FontAwesomeIcon icon={faMountain} fontSize="inherit" />
      &nbsp;{colorMode}
    </NavButton>
  );
};

export default ThemeToggle;
