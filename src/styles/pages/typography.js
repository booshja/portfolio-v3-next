// dependencies
import styled from 'styled-components';
import { breakpoints, breakpointValues } from '../breakpoints';

// eslint-disable-next-line
const { mobileSm, mobileLg, tabletSm, tabletLg, desktopSm, desktopLg } =
  breakpointValues;

/** Headers ******************************************** */
const MyName = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: 5%;
  margin-bottom: 1rem;
  color: var(--color-text-primary);

  ${breakpoints('font-size', 'rem', [
    { [mobileLg]: 6 },
    { [tabletSm]: 8 },
    { [tabletLg]: 10 },
    { [desktopSm]: 11 },
    { [desktopLg]: 12 },
  ])};
  ${breakpoints('margin-bottom', 'rem', [
    { [tabletSm]: 2 },
    { [desktopLg]: 3 },
  ])};
`;

const PageTitle = styled.h1`
  color: var(--color-text-primary);
  align-self: flex-start;
  justify-self: flex-start;
  font-size: 3.2rem;

  ${breakpoints('font-size', 'rem', [{ [tabletSm]: 4 }])};
`;

const StoryGreeting = styled.h2`
  color: var(--color-text-primary);
  font-size: 2.6rem;
  margin: 3rem 0 1rem 0;

  ${breakpoints('font-size', 'rem', [{ [tabletSm]: 3 }])};
`;

const SkillsHeader = styled.h2`
  color: var(--color-text-primary);
  font-size: 2.6rem;
  font-weight: 700;
  margin: 2rem 0;
`;

const ExpItemName = styled.h3`
  color: var(--color-text-primary);
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-left: -1rem;

  ${breakpoints('font-size', 'rem', [{ [tabletSm]: 3.5 }])};
`;

/** Text *********************************************** */
const MyTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: 2.5%;
  color: var(--color-text-secondary);

  ${breakpoints('font-size', 'rem', [
    { [mobileLg]: 2.8 },
    { [tabletSm]: 3.8 },
    { [tabletLg]: 4.2 },
    { [desktopSm]: 4.8 },
    { [desktopLg]: 5 },
  ])};
`;

const ExpItemText = styled.p`
  color: var(--color-text-primary);
  font-size: 1.8rem;
  line-height: 1.5;
  margin-bottom: 1rem;

  span {
    font-size: inherit;
    font-style: italic;
    font-weight: 700;
  }

  ${breakpoints('font-size', 'rem', [{ [tabletSm]: 2 }])};
`;

const Hi = styled.span`
  color: inherit;
  font-weight: 700;
  font-size: 2.6rem;
  font-family: Poppins, sans-serif;

  ${breakpoints('font-size', 'rem', [{ [tabletSm]: 2.8 }])}
`;

const StoryText = styled.p`
  color: var(--color-text-primary);
  font-size: 2rem;
  margin: 1rem 0 1rem 2rem;
  line-height: 1.75;
  background: transparent;

  ${breakpoints('line-height', '', [{ [tabletSm]: 1.5 }])};
`;

const ContactText = styled.p`
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: var(--color-text-primary);
  margin: 2rem 0 1rem 2rem;
`;

const ReCAPTCHAText = styled.p`
  color: var(--color-text-primary);
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const NotFoundText = styled.p`
  font-size: 2.4rem;
  margin-bottom: 2rem;
  color: var(--color-text-primary);
  margin: 2rem 0 1rem 2rem;

  ${breakpoints('font-size', 'rem', [{ [tabletSm]: 3 }])};
`;

/** Lists ********************************************** */
const ExpList = styled.ul`
  color: var(--color-text-primary);
  padding: 2rem 0 3rem 3rem;
  max-width: 1220px;
`;

const ExpItem = styled.li`
  color: var(--color-text-primary);
  font-size: 1.8rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  min-height: 300px;

  ${breakpoints('flex-direction', '', [{ [tabletSm]: 'row' }])};
`;

const TagList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 1rem;

  ${breakpoints('width', '', [{ [tabletSm]: '90%' }])};
`;

const Tag = styled.li`
  border-radius: 15px;
  background-color: var(--color-bg-card);
  color: var(--color-bg-primary);
  ${({ theme }) => theme === 'light' && 'color: var(--color-text-primary)'};
  border: ${({ theme }) =>
    theme === 'light' ? `2px solid var(--color-text-primary)` : 'none'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  padding: 0.75rem 1.5rem;
  margin: 0 2rem 2rem 0;

  ${breakpoints('font-size', 'rem', [{ [tabletSm]: 1.8 }])};
`;

const SkillsList = styled.ul`
  padding-left: 2rem;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 4rem;
  column-gap: 2rem;

  ${breakpoints('margin-bottom', 'rem', [{ [tabletSm]: 2 }])};
  ${breakpoints('grid-template-columns', '', [
    { [tabletSm]: 'repeat(3, 1fr)' },
  ])};
`;

const Skill = styled.li`
  color: var(--color-text-primary);
  font-size: 1.8rem;
  margin: 0.75rem 0;
  line-height: 1.5;

  ${breakpoints('font-size', 'rem', [{ [tabletSm]: 2 }])};
  ${breakpoints('margin', '', [{ [tabletSm]: '1rem 0' }])};
`;

/** Links ********************************************** */
const ExpCardLink = styled.a`
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: calc(2.2rem * 1.5);

  svg {
    height: 100%;
    margin-right: 1.25rem;
  }

  &:hover {
    font-style: italic;
  }

  &:focus-visible {
    outline: 1px solid var(--color-text-secondary);
    font-style: italic;
  }
`;

const StoryLink = styled.a`
  color: var(--color-text-primary);
  font-size: 2rem;
  font-weight: 700;
  text-decoration: underline;

  &:hover {
    filter: brightness(60%);
  }

  &:focus-visible {
    outline: 1px solid var(--color-text-secondary);
  }
`;

const ReCAPTCHALink = styled.a`
  color: var(--color-text-primary);
  font-size: 1.2rem;
  text-decoration: underline;
  font-weight: 700;

  &:hover {
    filter: brightness(80%);
  }

  &:focus-visible {
    outline: 1px solid var(--color-text-secondary);
  }
`;

const NotFoundLink = styled.a`
  font-size: 2.4rem;
  font-weight: 700;
  text-decoration: underline;
  color: var(--color-text-secondary);

  ${breakpoints('font-size', 'rem', [{ [tabletSm]: 3 }])};

  &:hover {
    filter: brightness(80%);
  }

  &:focus-visible {
    outline: 1px solid var(--color-text-primary);
  }
`;

/** Forms ********************************************** */
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 0 0 2rem;
`;

const ContactLabel = styled.label`
  font-size: 2rem;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
`;

const ContactInput = styled.input`
  padding: 0.5rem;
  font-size: 1.8rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  width: calc(100% - 1rem);

  &:focus {
    outline: 1px solid var(--color-text-secondary);
  }
`;

const ContactTextArea = styled.textarea`
  padding: 0.5rem;
  font-size: 1.8rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  width: calc(100% - 1rem);

  &:focus {
    outline: 1px solid var(--color-text-secondary);
  }
`;

export {
  ContactForm,
  ContactInput,
  ContactLabel,
  ContactText,
  ContactTextArea,
  ExpCardLink,
  ExpItem,
  ExpItemName,
  ExpItemText,
  ExpList,
  Hi,
  MyName,
  MyTitle,
  NotFoundLink,
  NotFoundText,
  PageTitle,
  ReCAPTCHAText,
  ReCAPTCHALink,
  Skill,
  SkillsHeader,
  SkillsList,
  StoryGreeting,
  StoryLink,
  StoryText,
  Tag,
  TagList,
};
