// dependencies
import { useContext } from 'react';
import { v4 as randomId } from 'uuid';
import styled from 'styled-components';
// assets
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
// components
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
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

const ExpContainer = styled(PageContainer)`
  background-color: var(--color-bg-secondary);
  height: 100%;
  min-height: 100vh;
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
      <MainContent className="slide-in-left">
        <ExpList>
          {projects.map((item) => (
            <ExpItem key={item.position}>
              <ExpLeft>
                <ExpItemName>{item.name}:</ExpItemName>
                <ExpItemText>
                  <span>description: </span> {item.description}
                </ExpItemText>
                <ExpItemText>
                  <span>thoughts: </span> {item.thoughts}
                </ExpItemText>
                <TagList>
                  {item.tags.map((tag) => (
                    <Tag key={randomId()} theme={colorMode}>
                      {tag}
                    </Tag>
                  ))}
                </TagList>
              </ExpLeft>
              <ExpRight>
                <ExpCard>
                  <ExpCardInner>
                    <ExpCardFront theme={colorMode}>
                      <Screencap>
                        <Image
                          src={item.image_url}
                          alt={`${item.name} screen capture.`}
                          priority
                          layout="fill"
                          objectFit="contain"
                          objectPosition="50% 50%"
                        />
                      </Screencap>
                    </ExpCardFront>
                    <ExpCardBack theme={colorMode}>
                      {item?.github_url && (
                        <Link passHref href={item.github_url}>
                          <ExpCardLink
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon icon={faGithub} />
                            View on GitHub
                          </ExpCardLink>
                        </Link>
                      )}
                      {item?.live_url && (
                        <Link passHref href={item.live_url}>
                          <ExpCardLink
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon icon={faLaptop} />
                            View Live Website
                          </ExpCardLink>
                        </Link>
                      )}
                      {!item?.live_url && !item?.github_url && (
                        <p>No Links Available!</p>
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
      <MainContent className="slide-in-left">
        <ExpList>
          <ExpItemText>No projects found!</ExpItemText>
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
      <PublicLayout>
        <ExpContainer>
          <PageTitle>experience()</PageTitle>
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

    return { props: { projects }, revalidate: 10080 };
  } catch (error) {
    return { notFound: true };
  }
};

export default Experience;
