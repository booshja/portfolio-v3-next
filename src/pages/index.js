// dependencies
import styled from 'styled-components';
// components
import Head from 'next/head';
import { PublicLayout } from '../components';
import { PageContainer, LandingDivider } from '../styles/pages/containers';
import { MyName, MyTitle } from '../styles/pages/typography';

const IsPageContainer = styled(PageContainer)`
  background-color: ${({ theme: t }) => t.bgPrimary};
  justify-content: center;
  align-items: center;
  padding: 0;
  min-height: 100vh;
`;

const Is = () => (
  <>
    <Head>
      <title>Hi! I&apos;m Jacob!</title>
      <meta
        name="description"
        content="Portfolio for Jacob Andes, Software Engineer."
      />
      <meta name="robots" content="index, follow" />
    </Head>
    <PublicLayout>
      <IsPageContainer>
        <MyName>Jacob Andes</MyName>
        <LandingDivider />
        <MyTitle>Software Engineer</MyTitle>
      </IsPageContainer>
    </PublicLayout>
  </>
);

export default Is;
