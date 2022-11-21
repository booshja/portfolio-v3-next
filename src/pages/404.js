// dependencies
import styled from 'styled-components';
// components
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { MainContent, PageContainer } from '../styles/pages/containers';
import {
  PageTitle,
  NotFoundLink,
  NotFoundText,
} from '../styles/pages/typography';
import { NotFoundImg } from '../styles/pages/media';
import { Header, Socials, Copyright } from '../components';
// assets
import SadIceCream from '../../public/images/sad-ice-cream.jpeg';

const NotFoundContainer = styled(PageContainer)`
  background-color: var(--color-bg-secondary);
  min-height: 100vh;
  ${({ wp }) => (wp ? 'display: flex' : null)};
  ${({ wp }) => (wp ? 'align-items: center' : null)};
  ${({ wp }) => (wp ? 'justify-content: center' : null)};
  ${({ wp }) => (wp ? 'margin-top: 0' : null)};
  ${({ wp }) => (wp ? 'padding-top: 0' : null)};
`;

const NotFoundContent = styled(MainContent)`
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const NotFound = () => (
  <>
    <Head>
      <title>Uh oh...</title>
      <meta name="description" content="Not Found" />
      <meta name="robots" content="noindex, follow" />
    </Head>
    <Header notFound />
    <Socials />
    <Copyright />
    <NotFoundContainer>
      <PageTitle>notFound()</PageTitle>
      <NotFoundContent>
        <NotFoundText>Uh oh, couldn&apos;t find that&hellip;</NotFoundText>
        <NotFoundText>
          Click&nbsp;
          <NotFoundLink href="/">here</NotFoundLink>
          &nbsp;to go back home.
        </NotFoundText>
        <NotFoundImg>
          <Image
            src={SadIceCream}
            alt="Ice cream dropped on a stone slab"
            layout="fill"
            priority
            // objectFit="contain"
            // objectPosition="50% bottom"
          />
        </NotFoundImg>
      </NotFoundContent>
    </NotFoundContainer>
  </>
);

export default NotFound;
