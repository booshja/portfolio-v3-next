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
  font-size: 4rem;
`;

const StoryGreeting = styled.h2`
  color: var(--color-text-primary);
  font-size: 3rem;
  margin: 3rem 0 1rem 0;
`;

const SkillsHeader = styled.h2`
  color: var(--color-text-primary);
  font-size: 2.6rem;
  font-weight: 700;
  margin: 2rem 0;
`;

const ExpItemName = styled.h3`
  color: var(--color-text-primary);
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-left: -1rem;
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
  font-size: 2rem;
  line-height: 1.5;
  margin-bottom: 1rem;

  span {
    font-size: inherit;
    font-style: italic;
    font-weight: 700;
  }
`;

const Hi = styled.span`
  color: inherit;
  font-weight: 700;
  font-size: 2.8rem;
  font-family: Poppins, sans-serif;
`;

const StoryText = styled.p`
  color: var(--color-text-primary);
  font-size: 2rem;
  margin: 1rem 0 1rem 2rem;
  line-height: 1.5;
  background: transparent;
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
  font-size: 3rem;
  margin-bottom: 2rem;
  color: var(--color-text-primary);
  margin: 2rem 0 1rem 2rem;
`;

/** Lists ********************************************** */
const ExpList = styled.ul`
  color: var(--color-text-primary);
  padding: 2rem 0 3rem 3rem;
`;

const ExpItem = styled.li`
  color: var(--color-text-primary);
  font-size: 1.8rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
  min-height: 300px;
`;

const TagList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-wrap: wrap;
  width: 90%;
  margin-top: 1rem;
`;

// TODO: fix theme inerpolation below
const Tag = styled.li`
  border-radius: 15px;
  background-color: var(--color-bg-card);
  color: var(--color-bg-primary);
  ${({ theme: t }) => t.themeName === 'Light' && 'color: #000000;'};
  border: ${({ theme: t }) =>
    t.themeName === 'Light' ? '2px solid #000000' : 'none'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  padding: 0.75rem 1.5rem;
  margin: 0 2rem 2rem 0;
`;

const SkillsList = styled.ul`
  padding-left: 2rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Skill = styled.li`
  color: var(--color-text-primary);
  font-size: 2rem;
  margin: 1rem 0;
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
  border: 2px solid red;

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
  font-size: 3rem;
  font-weight: 700;
  text-decoration: underline;
  color: var(--color-text-secondary);

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
