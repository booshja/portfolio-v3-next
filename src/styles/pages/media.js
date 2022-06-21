// dependencies
import styled from 'styled-components';
// components
import Image from 'next/image';

/** Images ********************************************* */
const NotFoundImg = styled(Image)`
  height: 75%;
  margin-top: 2rem;
`;

const BugsNoImg = styled(Image)`
  width: 50%;
  margin-bottom: 4rem;
`;
const MailImg = styled(Image)`
  width: 100%;
`;

const Screencap = styled(Image)`
  height: 296px;
`;

export { BugsNoImg, MailImg, NotFoundImg, Screencap };
