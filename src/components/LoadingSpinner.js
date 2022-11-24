// assets
import { faPaw } from '@fortawesome/free-solid-svg-icons';
// components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoadingText } from './styles/typography';
import { SpinnerContainer } from './styles/containers';

const LoadingSpinner = ({ size }) => (
  <SpinnerContainer size={size} data-test="spinner-container">
    <FontAwesomeIcon icon={faPaw} spin data-test="spinner-icon" />
    <LoadingText data-test="spinner-test">Loading&hellip;</LoadingText>
  </SpinnerContainer>
);

export default LoadingSpinner;
