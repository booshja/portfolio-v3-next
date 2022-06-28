// dependencies
import styled, { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
// components
import Link from 'next/link';
import Image from 'next/image';
import { MainContent, PageContainer } from '../../styles/pages/containers';
import {
  PageTitle,
  NotFoundLink,
  NotFoundText,
} from '../../styles/pages/typography';
import { NotFoundImg } from '../../styles/pages/media';
import { Header, Socials, Copyright } from '../../components';
// assets
import SadIceCream from '../../assets/sad-ice-cream.jpeg';
// state
import { selectTheme } from '../../redux/slices/themeSlice';

const NotFoundContainer = styled(PageContainer)`
  background-color: ${({ theme: t }) => t.bgSecondary};
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

const NotFound = () => {
  const currentTheme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={currentTheme}>
      <Header notFound />
      <Socials />
      <Copyright />
      <NotFoundContainer>
        <PageTitle>notFound()</PageTitle>
        <NotFoundContent>
          <NotFoundText>Uh oh, couldn&apos;t find that&hellip;</NotFoundText>
          <NotFoundText>
            Click&nbsp;
            <Link href="/" passHref>
              <NotFoundLink>here</NotFoundLink>
            </Link>
            &nbsp;to go back home.
          </NotFoundText>
          <NotFoundImg>
            <Image
              src={SadIceCream}
              alt="Ice cream dropped on a stone slab"
              layout="fill"
              priority
              objectFit="contain"
              objectPosition="50% bottom"
            />
          </NotFoundImg>
        </NotFoundContent>
      </NotFoundContainer>
    </ThemeProvider>
  );
};

export default NotFound;
