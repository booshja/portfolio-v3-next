// dependencies
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
// analytics
import PlausibleProvider from 'next-plausible';
// components
import { HeadMeta } from '../components';
import { wrapper } from '../redux/store';
// css
import GlobalStyle from '../styles/globalStyles';
import { ThemeProvider } from '../context/themeContext';
// font awesome config
config.autoAddCss = false;

const MyApp = ({ Component, pageProps }) => (
  <PlausibleProvider domain="jacobandes.dev" trackOutboundLinks>
    <ThemeProvider>
      <HeadMeta />
      <GlobalStyle />
      {/* eslint-disable-next-line */}
      <Component {...pageProps} />
    </ThemeProvider>
  </PlausibleProvider>
);

export default wrapper.withRedux(MyApp);
