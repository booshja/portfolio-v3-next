// dependencies
import React from 'react';
// assets
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
// components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialsContainer, VerticalAccentDiv } from './styles/containers';
import { FollowMe } from './styles/typography';

const Socials = () => (
  <SocialsContainer>
    <a href="https://github.com/booshja/">
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a href="https://twitter.com/booshja">
      <FontAwesomeIcon icon={faTwitter} />
    </a>
    <a href="https://www.linkedin.com/in/jacobandes/">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <VerticalAccentDiv />
    <FollowMe>Follow Me</FollowMe>
  </SocialsContainer>
);

export default Socials;
