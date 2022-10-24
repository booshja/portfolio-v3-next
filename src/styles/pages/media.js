// dependencies
import styled from 'styled-components';
import { breakpoints, breakpointValues } from '../breakpoints';

const { tabletSm, tabletLg, desktopSm, desktopLg } = breakpointValues;

/** Images ********************************************* */
const NotFoundImg = styled.div`
  position: relative;
  height: 300px;
  width: 100%;

  ${breakpoints('height', '', [
    { [tabletSm]: '400px' },
    { [tabletLg]: '500px' },
    { [desktopSm]: '600px' },
    { [desktopSm]: '700px' },
  ])};
  ${breakpoints('width', 'px', [{ [desktopLg]: 1240 }])};
`;

const BugsNoImg = styled.div`
  margin-bottom: 4rem;
  height: 80vw;
  width: 100%;
  position: relative;

  ${breakpoints('height', '', [
    { [tabletLg]: '75vw' },
    { [desktopSm]: '70vw' },
    { [desktopLg]: '875px' },
  ])};
`;
const MailImg = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Screencap = styled.div`
  height: 296px;
  width: 100%;
  position: relative;
`;

export { BugsNoImg, MailImg, NotFoundImg, Screencap };
