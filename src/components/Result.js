// assets
import Fireworks from '../../public/images/fireworks.jpeg';
import IceCream from '../../public/images/sad-ice-cream.jpeg';
// components
import { ResultText, ResultLink } from './styles/typography';
import { ColumnFlex } from './styles/containers';
import { ResultImg } from './styles/media';

const Result = ({ approval }) => (
  <ColumnFlex
    style={{ position: 'relative', height: '100%' }}
    data-test="result-container"
  >
    <ResultText data-test="result-feedback">
      {approval
        ? "Thank you for the message! I'll get back to you soon!"
        : 'Uh oh, something went wrong!'}
    </ResultText>
    <ResultText data-test="result-feedback-link-text">
      Click&nbsp;
      <ResultLink href="/" data-test="result-feedback-link-span">
        here
      </ResultLink>
      &nbsp;to go home.
    </ResultText>
    <div
      style={{ position: 'relative', width: '100%', height: '100%' }}
      data-test="result-image-container"
    >
      <ResultImg
        src={approval ? Fireworks : IceCream}
        alt={approval ? 'Fireworks.' : 'Dropped ice cream cone.'}
        layout="fill"
        data-test="result-image"
      />
    </div>
  </ColumnFlex>
);

export default Result;
