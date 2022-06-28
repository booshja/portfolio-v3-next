// dependencies
import styled, { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
// components
import Image from 'next/image';
import Link from 'next/link';
import { PageContainer } from '../../styles/pages/containers';
import { NotFoundLink } from '../../styles/pages/typography';
import { BugsNoImg } from '../../styles/pages/media';
// assets
import BugsSaysNo from '../../assets/bugs-bunnys-no.png';
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

const WpAdmin = () => {
  const currentTheme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={currentTheme}>
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
    </ThemeProvider>
  );
};

export default WpAdmin;
