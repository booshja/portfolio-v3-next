// dependencies
import Head from 'next/head';
import { useSelector } from 'react-redux';
// state
import { selectTheme } from '../redux/slices/themeSlice';

const HeadMeta = () => {
  const currentTheme = useSelector(selectTheme);
  return (
    <Head>
      <title>JacobAndes.dev</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="generator" content="Next 12.1.6" />
      <meta
        name="description"
        content="Portfolio website for Jacob Andes, Software Engineer from Seattle, WA, USA."
      />
      <meta name="robots" content="index, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="author" content="Jacob Andes" />
      <meta property="og:title" content="Jacob Andes" />
      <meta property="og:site_name" content="Jacob Andes" />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:description"
        content="Portfolio website for Jacob Andes, software engineer from Seattle, WA, USA."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jacobandes.dev" />
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
      <meta name="twitter:url" content="https://jacobandes.dev" />
      <meta name="twitter:creator" content="@booshja" />
      <meta name="twitter:site" content="@booshja" />
      <meta name="twitter:title" content="Jacob Andes" />
      <meta
        name="twitter:description"
        content="Portfolio website for Jacob Andes, software engineer from Seattle, WA, USA."
      />
      {/* <meta
          name="twitter:image"
          content="https://jacobandes.dev/images/og-default.png"
        /> */}
      <meta name="theme-color" content={currentTheme.bgPrimary} />
      <link rel="canonical" href="https://jacobandes.dev" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadMeta;
