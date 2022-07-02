// assets
import Fireworks from '../../public/images/fireworks.jpeg';
import IceCream from '../../public/images/sad-ice-cream.jpeg';
// components
import { ResultText, ResultLink } from './styles/typography';
import { ColumnFlex } from './styles/containers';
import { ResultImg } from './styles/media';

const Result = ({ approval }) => (
  <ColumnFlex style={{ position: 'relative', height: '100%' }}>
    <ResultText>
      {approval
        ? "Thank you for the message! I'll get back to you soon!"
        : 'Uh oh, something went wrong!'}
    </ResultText>
    <ResultText>
      Click <ResultLink href="/">here</ResultLink> to go home.
    </ResultText>
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <ResultImg
        src={approval ? Fireworks : IceCream}
        alt={approval ? 'Fireworks.' : 'Dropped ice cream cone.'}
        layout="fill"
      />
    </div>
  </ColumnFlex>
);

export default Result;
