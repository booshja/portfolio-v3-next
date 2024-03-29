// dependencies
import React from 'react';
import styled from 'styled-components';
import { v4 as randomId } from 'uuid';
import Image from 'next/legacy/image';
import Head from 'next/head';
import { PublicLayout } from '../../components';
import {
  PageContainer,
  MainContent,
  LeftSide as Left,
  RightSide as Right,
} from '../../styles/pages/containers';
import {
  PageTitle,
  Hi,
  StoryGreeting,
  StoryText,
  SkillsHeader,
  SkillsList,
  Skill,
  StoryLink,
} from '../../styles/pages/typography';
// assets
import Headshot from '../../../public/images/headshot.jpg';
// data
import data from '../../utils/skills.json';
import { breakpoints, breakpointValues } from '../../styles/breakpoints';

const { tabletSm, tabletLg } = breakpointValues;

const AboutContainer = styled(PageContainer)`
  background-color: var(--color-bg-primary);
`;

const RightSide = styled(Right)`
  width: 80%;
  margin-bottom: 0;
  padding-top: 2rem;
  max-width: 675px;

  ${breakpoints('padding-top', 'rem', [{ [tabletSm]: 8 }])};
  ${breakpoints('margin-bottom', 'rem', [{ [tabletSm]: 5 }])};
  ${breakpoints('width', '%', [{ [tabletSm]: 55 }, { [tabletLg]: 40 }])};
`;

const LeftSide = styled(Left)`
  width: 90%;
  height: 40%;
  max-width: 1025px;

  ${breakpoints('width', '%', [{ [tabletSm]: 45 }, { [tabletLg]: 60 }])};
`;

const SkillsSection = styled.section`
  width: 90%;

  ${breakpoints('height', '%', [{ [tabletSm]: 45 }])};
  ${breakpoints('width', '', [{ [tabletSm]: 'auto' }])};
`;

const About = () => (
  <>
    <Head>
      <title>About Me</title>
      <meta
        name="description"
        content="Information and skills for Jacob Andes."
      />
      <meta name="robots" content="index, follow" />
    </Head>
    <PublicLayout>
      <AboutContainer>
        <PageTitle>about()</PageTitle>
        <MainContent className="slide-in-left">
          <LeftSide>
            <section>
              <StoryGreeting>
                <Hi>Hi! </Hi>
                I&apos;m Jacob!
              </StoryGreeting>
              <StoryText>
                I&apos;m a Software Engineer from Seattle, WA with experience
                across the stack, but a passion for the Front End. I&apos;m
                currently working as a Software Engineer at&nbsp;
                <StoryLink href="https://smartsheet.com" target="_blank">
                  Smartsheet
                </StoryLink>
                . I love finding creative solutions to complex problems and
                creating beautiful, reliable, and responsive web applications.
              </StoryText>
              <StoryText>
                When I&apos;m not coding, you can find me spending time with my
                dogs, listening to music, going to see live music, reading,
                watching hockey, or clumsily playing hockey in the&nbsp;
                <StoryLink
                  href="https://krakenhockeyleague.com/team/11531/home/"
                  target="_blank"
                >
                  Kraken Hockey League
                </StoryLink>
                .
              </StoryText>
            </section>
            <SkillsSection>
              <SkillsHeader>Skills:</SkillsHeader>
              <SkillsList>
                {data.skills.map((skill) => (
                  <Skill key={randomId()}>{skill}</Skill>
                ))}
              </SkillsList>
            </SkillsSection>
          </LeftSide>
          <RightSide>
            <Image
              src={Headshot}
              alt="Jacob smiling in front of an abstact, brightly colored cloud mural by Painting Joy Mural Co."
              layout="intrinsic"
              priority
              height={942}
              width={827}
            />
          </RightSide>
        </MainContent>
      </AboutContainer>
    </PublicLayout>
  </>
);

export default About;
