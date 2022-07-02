// dependencies
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// components
import Head from 'next/head';
import { wrapper } from '../redux/store';
// state
import {
  selectTheme,
  setCurrentTheme,
  setThemeNumber,
} from '../redux/slices/themeSlice';
// css
import GlobalStyle from '../styles/globalStyles';
import { THEMES } from '../styles/themes';

const MyApp = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  const currentTheme = useSelector(selectTheme);

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
      <Head>
        <title>JacobAndes.dev</title>
        <meta
          name="description"
          content="Portfolio website for Jacob Andes, Software Engineer from Seattle, WA, USA."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta charset="UTF-8" />
        <meta name="author" content="Jacob Andes" />
        <meta name="copyright" content="Jacob Andes" />
        <meta name="generator" content="Next.js" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta property="og:title" content="Jacob Andes" />
        <meta
          property="og:description"
          content="Portfolio website for Jacob Andes, software engineer from Seattle, WA, USA."
        />
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:image"
          content="https://jacobandes.dev/images/og-default.png"
        /> */}
        {/* <meta
          property="og:image:alt"
          content="Banner for jacobandes.dev, featuring !!!INSERT HERE!!!"
        /> */}
        {/* <meta property="og:image:width" content="" /> */}
        {/* <meta property="og:image:height" content="" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@booshja" />
        <meta name="twitter:title" content="Jacob Andes" />
        <meta
          name="twitter:description"
          content="Portfolio website for Jacob Andes, software engineer from Seattle, WA, USA."
        />
        {/* <meta
          name="twitter:image"
          content="https://jacobandes.dev/images/og-default.png"
        /> */}
        <link rel="canonical" href="https://jacobandes.dev" />
        <meta name="theme-color" content={currentTheme.bgPrimary} />
      </Head>
      <GlobalStyle />
      {/* eslint-disable-next-line */}
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(MyApp);
