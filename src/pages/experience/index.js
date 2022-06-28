// dependencies
import { v4 as randomId } from 'uuid';
import styled from 'styled-components';
// assets
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
// components
import Image from 'next/image';
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
// database
import connectMongo from '../../utils/connectMongo';
import Project from '../../models/projectModel';

const ExpContainer = styled(PageContainer)`
  background-color: ${({ theme: t }) => t.bgSecondary};
  height: 100%;
  min-height: 100vh;
`;

const Experience = ({ projects }) => {
  let content;

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
                    <Tag key={randomId()}>{tag}</Tag>
                  ))}
                </TagList>
              </ExpLeft>
              <ExpRight>
                <ExpCard>
                  <ExpCardInner>
                    <ExpCardFront>
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
                    <ExpCardBack>
                      <ExpCardLink href={item.github_url}>
                        <span>
                          <FontAwesomeIcon icon={faGithub} />
                        </span>
                        View on GitHub
                      </ExpCardLink>
                      {item?.live_url && (
                        <ExpCardLink href={item.live_url}>
                          <span>
                            <FontAwesomeIcon icon={faLaptop} />
                          </span>
                          View Live Website
                        </ExpCardLink>
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
    <PublicLayout>
      <ExpContainer>
        <PageTitle>experience()</PageTitle>
        {content}
      </ExpContainer>
    </PublicLayout>
  );
};

export const getStaticProps = async () => {
  try {
    await connectMongo();

    const projects = await Project.find();

    return { props: { projects: JSON.parse(JSON.stringify(projects)) } };
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
};

export default Experience;
