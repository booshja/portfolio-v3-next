// dependencies
import { css } from 'styled-components';

const breakpoints = (
  cssProp = 'padding',
  cssPropUnits = 'px',
  values = [],
  mediaQueryType = 'min-width',
) => {
  // function for creating media queries for use in styled-components
  const breakpointProps = values.reduce((mediaQueries, value) => {
    const [screenBreakpoint, cssPropBreakpoint] = [
      Object.keys(value)[0],
      Object.values(value)[0],
    ];
    const queries = `${mediaQueries}
        @media screen and (${mediaQueryType}: ${screenBreakpoint}px) {
            ${cssProp}: ${cssPropBreakpoint}${cssPropUnits};
        }
        `;
    return queries;
  }, '');
  return css([breakpointProps]);
};

const breakpointValues = {
  mobileSm: 375,
  mobileLg: 414,
  tabletSm: 768,
  tabletLg: 1024,
  desktopSm: 1280,
  desktopLg: 1440,
};

const displayValues = [
  // iPhone SE
  [375, 667],
  // iPhone XR
  [414, 896],
  // iPad Mini
  [768, 1024],
  // iPad Mini Horizontal
  [1024, 768],
  // Nest Hub Max
  [1280, 800],
  // Large screen
  [1440, 960],
];

export { breakpoints, breakpointValues, displayValues };
