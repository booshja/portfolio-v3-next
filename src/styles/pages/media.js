// dependencies
import styled from 'styled-components';
import { breakpoints, breakpointValues } from '../breakpoints';

// eslint-disable-next-line operator-linebreak
const { mobileSm, mobileLg, tabletSm, tabletLg, desktopSm, desktopLg } =
  breakpointValues;

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
  width: 50%;
  margin-bottom: 4rem;
  height: 80%;
  width: 100%;
  position: relative;
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
