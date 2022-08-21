// dependencies
import styled from 'styled-components';
// components
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { PageContainer } from '../../styles/pages/containers';
import { NotFoundLink } from '../../styles/pages/typography';
import { BugsNoImg } from '../../styles/pages/media';
// assets
import BugsSaysNo from '../../../public/images/bugs-bunnys-no.png';

const NotFoundContainer = styled(PageContainer)`
  background-color: var(--color-bg-secondary);
  min-height: 100vh;
  ${({ wp }) => (wp ? 'display: flex' : null)};
  ${({ wp }) => (wp ? 'align-items: center' : null)};
  ${({ wp }) => (wp ? 'justify-content: center' : null)};
  ${({ wp }) => (wp ? 'margin-top: 0' : null)};
  ${({ wp }) => (wp ? 'padding-top: 0' : null)};
`;

const WpAdmin = () => (
  <>
    <Head>
      <title>Nope, nice try.</title>
      <meta
        name="description"
        content="A page telling you no, because this site was not built with wordpress."
      />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <NotFoundContainer wp>
      <BugsNoImg>
        <Image
          src={BugsSaysNo}
          alt="Bugs bunny no meme"
          layout="fill"
          priority
          objectFit="contain"
          objectPosition="50% bottom"
        />
      </BugsNoImg>
      <Link href="/" passHref>
        <NotFoundLink>Go Back</NotFoundLink>
      </Link>
    </NotFoundContainer>
  </>
);

export default WpAdmin;
