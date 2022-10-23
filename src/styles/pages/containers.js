// dependencies
import styled from 'styled-components';
import { breakpoints, breakpointValues } from '../breakpoints';

// eslint-disable-next-line
const { mobileSm, mobileLg, tabletSm, tabletLg, desktopSm, desktopLg } =
  breakpointValues;

/** Generics ******************************************* */
const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

/** Containers ***************************************** */
const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  margin-top: -60px;
  padding: 6rem 2rem 0rem 2rem;

  ${breakpoints('padding', '', [{ [tabletSm]: '8rem 10rem 0 10rem' }])}
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: column-reverse;
  height: calc(100% - 60px);

  ${breakpoints('flex-direction', '', [{ [tabletSm]: 'row' }])};
  ${breakpoints('flex-flow', '', [{ [tabletSm]: 'row' }])};
`;

const ExpLeft = styled(ColumnFlex)`
  width: 70%;
`;

const ExpRight = styled.div`
  display: flex;
  width: 30%;
`;

const ExpCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  margin-left: 2rem;
  display: flex;
  justify-content: center;
`;

const ExpCard = styled.div`
  background-color: transparent;
  width: 400px;
  height: 300px;
  perspective: 1000px;
  margin-left: 2rem;

  &:hover ${ExpCardInner} {
    transform: rotateY(180deg);
  }
`;

const ExpCardBack = styled(ColumnFlex)`
  justify-content: space-evenly;
  background-color: var(--color-bg-card);
  color: var(--color-text-card);
  transform: rotateY(180deg);
  position: absolute;
  width: 300px;
  height: 300px;
  backface-visibility: hidden;
  padding: 20% 1rem 20% 1rem;
  ${({ theme }) =>
    theme === 'light' ? 'border: 2px solid var(--color-text-primary);' : null}
  ${({ theme }) => (theme === 'light' ? 'border-radius: 6px;' : null)}

  & a:nth-of-type(1) {
    margin-bottom: 3rem;
  }
`;

const ExpCardFront = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-bg-secondary);
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  ${({ theme }) =>
    theme === 'light' ? 'border: 2px solid var(--color-text-primary);' : null}
  ${({ theme }) => (theme === 'light' ? 'border-radius: 6px;' : null)}
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : '60%')};
  padding-top: 1rem;
`;

const FormError = styled.div`
  font-family: Poppins, sans-serif;
  border: solid 2px var(--color-error);
  border-radius: 4px;
  background-color: var(--color-error-background);
  color: #000000;
  font-size: 1.4rem;
  padding: 1rem;
  margin: 0 0 1rem 1rem;
`;

const RightSide = styled.figure`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`;

const FlipArrow = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 5;
  transform: rotate(-45deg);
  font-size: 2rem;
  color: var(--color-text-primary);
`;

/** Dividers ******************************************* */
const LandingDivider = styled.div`
  width: 70%;
  height: 4px;
  background-color: var(--color-accent);
  margin-bottom: 1rem;

  ${breakpoints('width', '%', [
    { [tabletSm]: 55 },
    { [tabletLg]: 50 },
    { [desktopLg]: 45 },
  ])}
  ${breakpoints('margin-bottom', 'rem', [
    { [tabletSm]: 2 },
    { [desktopLg]: 3 },
  ])}
`;

export {
  ColumnFlex,
  ExpCard,
  ExpCardBack,
  ExpCardFront,
  ExpCardInner,
  ExpLeft,
  ExpRight,
  FlipArrow,
  FormError,
  LandingDivider,
  LeftSide,
  MainContent,
  PageContainer,
  RightSide,
};
