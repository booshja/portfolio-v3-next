// dependencies
import styled from 'styled-components';
// components
import Head from 'next/head';
import Image from 'next/legacy/image';
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
    <NotFoundContainer data-test="page-container">
      <PageTitle data-test="page-title">notFound()</PageTitle>
      <NotFoundContent data-test="main-content">
        <NotFoundText data-test="not-found-feedback">
          Uh oh, couldn&apos;t find that&hellip;
        </NotFoundText>
        <NotFoundText data-test="not-found-feedback-link-text">
          Click&nbsp;
          <NotFoundLink href="/" data-test="not-found-feedback-link">
            here
          </NotFoundLink>
          &nbsp;to go back home.
        </NotFoundText>
        <NotFoundImg data-test="not-found-image-container">
          <Image
            src={SadIceCream}
            alt="Ice cream dropped on a stone slab"
            layout="fill"
            priority
            // objectFit="contain"
            // objectPosition="50% bottom"
            data-test="not-found-image"
          />
        </NotFoundImg>
      </NotFoundContent>
    </NotFoundContainer>
  </>
);

export default NotFound;
