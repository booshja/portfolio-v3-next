// dependencies
import { useContext } from 'react';
import { v4 as randomId } from 'uuid';
import styled from 'styled-components';
// assets
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptop, faArrowDown } from '@fortawesome/free-solid-svg-icons';
// components
import Head from 'next/head';
import Image from 'next/legacy/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PublicLayout } from '../../components';
import {
  PageContainer,
  MainContent,
  ExpLeft,
  ExpRight,
  ExpCard,
  ExpCardBack,
  ExpCardFront,
  ExpCardInner,
  FlipArrow,
} from '../../styles/pages/containers';
import { Screencap } from '../../styles/pages/media';
import {
  PageTitle,
  ExpList,
  ExpItem,
  ExpItemName,
  ExpItemText,
  Tag,
  TagList,
  ExpCardLink,
} from '../../styles/pages/typography';
// context
import { ThemeContext } from '../../context/themeContext';
// database
import connectMongo from '../../utils/connectMongo';
import Project from '../../models/projectModel';
// styling
import { breakpointValues, breakpoints } from '../../styles/breakpoints';

const { tabletLg } = breakpointValues;

const ExpContainer = styled(PageContainer)`
  background-color: var(--color-bg-secondary);
  height: 100%;
  min-height: 100vh;
  min-width: 100%;
  width: 100%;
  ${breakpoints('padding-left', 'rem', [{ [tabletLg]: 12 }])}
`;

const Experience = ({ projects: projs }) => {
  const { colorMode } = useContext(ThemeContext);
  let content;

  const projects = projs.map((proj) => {
    const project = { ...proj };

    if (project?.github_url === 'null') project.github_url = null;
    if (project?.live_url === 'null') project.live_url = null;
    project.tags = JSON.parse(project.tags);

    return project;
  });

  if (projects.length) {
    content = (
      <MainContent className="slide-in-left" data-test="main-container">
        <ExpList data-test="exp-list">
          {projects.map((item) => (
            <ExpItem key={item.position} data-test="exp-item">
              <ExpLeft data-test="exp-item-left">
                <ExpItemName data-test="exp-item-name">
                  {item.name}:
                </ExpItemName>
                <ExpItemText data-test="exp-item-description">
                  <span data-test="description-label-span">description: </span>{' '}
                  {item.description}
                </ExpItemText>
                <ExpItemText data-test="exp-item-thoughts">
                  <span data-test="thoughts-label-span">thoughts: </span>{' '}
                  {item.thoughts}
                </ExpItemText>
                <TagList data-test="exp-item-tag-list">
                  {item.tags.map((tag) => (
                    <Tag
                      key={randomId()}
                      theme={colorMode}
                      data-test="exp-item-tag"
                    >
                      {tag}
                    </Tag>
                  ))}
                </TagList>
              </ExpLeft>
              <ExpRight data-test="exp-item-right">
                <ExpCard data-test="exp-card">
                  <ExpCardInner data-test="exp-card-inner">
                    <ExpCardFront
                      theme={colorMode}
                      data-test="exp-card-inner-front"
                    >
                      <Screencap data-test="exp-card-inner-screencap-container">
                        <Image
                          src={item.image_url}
                          alt={`${item.name} screen capture.`}
                          priority
                          layout="fill"
                          objectFit="contain"
                          objectPosition="50% 50%"
                          data-test="exp-card-inner-screencap-image"
                        />
                      </Screencap>
                      <FlipArrow data-test="exp-card-inner-flip-arrow">
                        <FontAwesomeIcon
                          icon={faArrowDown}
                          data-test="exp-card-inner-flip-icon"
                        />
                      </FlipArrow>
                    </ExpCardFront>
                    <ExpCardBack
                      theme={colorMode}
                      data-test="exp-card-inner-back"
                    >
                      {item?.github_url && (
                        <ExpCardLink
                          href={item.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-test="exp-card-inner-github-link"
                        >
                          <FontAwesomeIcon
                            icon={faGithub}
                            data-test="exp-card-inner-github-link-icon"
                          />
                          View on GitHub
                        </ExpCardLink>
                      )}
                      {item?.live_url && (
                        <ExpCardLink
                          href={item.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-test="exp-card-inner-live-link"
                        >
                          <FontAwesomeIcon
                            icon={faLaptop}
                            data-test="exp-card-inner-live-link-icon"
                          />
                          View Live Website
                        </ExpCardLink>
                      )}
                      {!item?.live_url && !item?.github_url && (
                        <p data-test="exp-card-inner-no-links-text">
                          No Links Available!
                        </p>
                      )}
                    </ExpCardBack>
                  </ExpCardInner>
                </ExpCard>
              </ExpRight>
            </ExpItem>
          ))}
        </ExpList>
      </MainContent>
    );
  } else {
    content = (
      <MainContent className="slide-in-left" data-test="main-container">
        <ExpList data-test="exp-list">
          <ExpItemText data-test="no-projects-text">
            No projects found!
          </ExpItemText>
        </ExpList>
      </MainContent>
    );
  }

  return (
    <>
      <Head>
        <title>My Experience</title>
        <meta
          name="description"
          content="The experience and projects of Jacob Andes."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <PublicLayout data-test="public-layout">
        <ExpContainer data-test="page-container">
          <PageTitle data-test="page-title">experience()</PageTitle>
          {content}
        </ExpContainer>
      </PublicLayout>
    </>
  );
};

export const getStaticProps = async () => {
  try {
    await connectMongo();

    const result = await Project.find({}, null, { sort: { position: 1 } });
    const projects = result.map((doc) => {
      const project = doc.toObject();
      // eslint-disable-next-line no-underscore-dangle
      project._id = project._id.toString();
      return project;
    });

    return { props: { projects }, revalidate: 604800 };
  } catch (error) {
    return { notFound: true };
  }
};

export default Experience;
