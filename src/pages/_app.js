// dependencies
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
// components
import { HeadMeta } from '../components';
import { wrapper } from '../redux/store';
// css
import GlobalStyle from '../styles/globalStyles';
import { ThemeProvider } from '../context/themeContext';
// font awesome config
config.autoAddCss = false;

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider>
    <HeadMeta />
    <GlobalStyle />
    {/* eslint-disable-next-line */}
    <Component {...pageProps} />
  </ThemeProvider>
);

export default wrapper.withRedux(MyApp);
