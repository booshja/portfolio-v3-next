// dependencies
import styled from 'styled-components';
// components
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
  <PublicLayout>
    <IsPageContainer>
      <MyName>Jacob Andes</MyName>
      <LandingDivider />
      <MyTitle>{/* Full Stack */}Software Engineer</MyTitle>
    </IsPageContainer>
  </PublicLayout>
);

export default Is;
