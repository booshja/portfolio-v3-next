// dependencies
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// components
import { wrapper } from '../redux/store';
// state
import { setCurrentTheme, setThemeNumber } from '../redux/slices/themeSlice';
// css
import GlobalStyle from '../styles/globalStyles';
import { THEMES } from '../styles/themes';

const MyApp = ({ Component, pageProps }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const rememberedTheme = localStorage.getItem('theme');
    if (rememberedTheme) {
      if (rememberedTheme === 'Dark') {
        dispatch(setThemeNumber(1));
        dispatch(setCurrentTheme(THEMES[1]));
      } else if (rememberedTheme === 'Soft') {
        dispatch(setThemeNumber(2));
        dispatch(setCurrentTheme(THEMES[2]));
      } else if (rememberedTheme === 'Sharp') {
        dispatch(setThemeNumber(3));
        dispatch(setCurrentTheme(THEMES[3]));
      }
    } else if (!rememberedTheme) {
      localStorage.setItem('theme', 'Light');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <GlobalStyle />
      {/* eslint-disable-next-line */}
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(MyApp);
