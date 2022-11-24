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
  <SocialsContainer data-test="socials-container">
    <a href="https://github.com/booshja/" data-test="github-socials-link">
      <FontAwesomeIcon icon={faGithub} data-test="github-socials-icon" />
    </a>
    <a href="https://twitter.com/booshja" data-test="twitter-socials-link">
      <FontAwesomeIcon icon={faTwitter} data-test="twitter-socials-icon" />
    </a>
    <a
      href="https://www.linkedin.com/in/jacobandes/"
      data-test="linkedin-socials-link"
    >
      <FontAwesomeIcon icon={faLinkedin} data-test="linkedin-socials-icon" />
    </a>
    <VerticalAccentDiv data-test="socials-vertical-accent" />
    <FollowMe data-test="socials-follow-text">Follow Me</FollowMe>
  </SocialsContainer>
);

export default Socials;
