// dependencies
import React from 'react';
import styled from 'styled-components';
import { v4 as randomId } from 'uuid';
// components
import Image from 'next/image';
import Head from 'next/head';
// import Link from 'next/link';
import { PublicLayout } from '../../components';
import {
  PageContainer,
  MainContent,
  LeftSide,
  RightSide as Right,
} from '../../styles/pages/containers';
import {
  PageTitle,
  Hi,
  StoryGreeting,
  StoryLink,
  StoryText,
  SkillsHeader,
  SkillsList,
  Skill,
} from '../../styles/pages/typography';
// assets
import Headshot from '../../../public/images/headshot.jpg';
// data
import data from '../../utils/skills.json';

const AboutContainer = styled(PageContainer)`
  background-color: var(--color-bg-primary);
`;

const RightSide = styled(Right)`
  width: 50%;
  margin-bottom: 5rem;
  padding-top: 10rem;
`;

const SkillsSection = styled.section`
  height: 45%;
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
          <LeftSide width="70%">
            <section>
              <StoryGreeting>
                <Hi>Hi! </Hi>
                I&apos;m Jacob!
              </StoryGreeting>
              <StoryText>
                I&apos;m a Software Engineer from Seattle, WA with experience
                across the stack, but focusing on the Front End. I&apos;m
                currently building the future of medical supply with&nbsp;
                <StoryLink
                  href="https://bttnusa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  bttn
                </StoryLink>
                . I love finding creative solutions to complex problems and
                creating beautiful, reliable, and responsive web applications.
              </StoryText>
              <StoryText>
                When I&apos;m not coding, you can find me spending time with
                my&nbsp;
                {/* <Link href="https://paintingjoy.art" passHref><StoryLink
              target="_blank"
              rel="noopener noreferrer"
              >
              partner
              </StoryLink>
              </Link>
            &nbsp;partner and  */}
                dogs, listening to music, going to see live music, reading,
                watching hockey, or clumsily playing hockey in the Kraken Hockey
                League.
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
              layout="fill"
              priority
              objectFit="contain"
              objectPosition="50% 35%"
            />
          </RightSide>
        </MainContent>
      </AboutContainer>
    </PublicLayout>
  </>
);

export default About;
