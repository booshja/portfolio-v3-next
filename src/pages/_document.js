// dependencies
import Document, { Html, Head, Main, NextScript } from 'next/document';
// styling
import { ServerStyleSheet } from 'styled-components';
import { COLORS, FONTS } from '../styles/constants';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            // eslint-disable-next-line
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  MagicScriptTag = () => {
    const codeToRunOnClient = `
      (function() {
        function getInitialColorMode() {
          const persistedColorPreference = window.localStorage.getItem('color-mode');
          const hasPersistedPreference = typeof persistedColorPreference === 'string';

          if (hasPersistedPreference) return persistedColorPreference;

          const mql = window.matchMedia('(prefers-color-scheme: dark)');
          const hasMediaQueryPreference = typeof mql.matches === 'boolean';

          if (hasMediaQueryPreference) {
            return mql.matches ? 'dark' : 'light';
        }

        return 'light';
      }

      const colorMode = getInitialColorMode();
      let colorNum;

      if (colorMode === 'light') {
        colorNum = 0;
      } else if (colorMode === 'dark') {
        colorNum = 1;
      } else if (colorMode === 'soft') {
        colorNum = 2;
      } else if (colorMode === 'sharp') {
        colorNum = 3;
      }

      const root = document.documentElement;

      Object.entries(${JSON.stringify(COLORS)})
        .forEach(([name, colorByTheme]) => {
          const cssVarName = '--color-' + name;
          root.style.setProperty(cssVarName, colorByTheme[colorMode]);
      });
      Object.entries(${JSON.stringify(FONTS)})
        .forEach(([name, value]) => {
          const cssVarName = '--font-' + name;
          root.style.setProperty(cssVarName, value);
      });

      root.style.setProperty('--initial-color-mode', colorMode);
      root.style.setProperty('--initial-color-mode-num', colorNum);
      })()
    `;

    // eslint-disable-next-line react/no-danger
    return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
  };

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <this.MagicScriptTag id="theme-hydration" />
          <div id="portals" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
