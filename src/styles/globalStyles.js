// dependencies
import { createGlobalStyle } from 'styled-components';
// breakpoints
import { breakpoints, breakpointValues } from './breakpoints';

// eslint-disable-next-line operator-linebreak
const { mobileSm, mobileLg, tabletSm, tabletLg, desktopSm, desktopLg } =
  breakpointValues;

const GlobalStyle = createGlobalStyle`
html, body, div, span, object, h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big,del, dfn, em, figure, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, b, u, i, dl, dt, dd, ol, ul, li,
form, label, article, aside, details,footer, header, menu, main, nav, output,
section, summary, time {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    /* font-size changed to 62.5% so rem units use font-size of 10 for 1rem */
    font-size: 62.5%;
    vertical-align: baseline;
    background: transparent;
    box-sizing: border-box;
}
html {
    scroll-behavior: smooth;
}
p, textarea, a, button, label, li {
    font-family: Sen, sans-serif;
}
h1, h2, h3, h4, h5, h6 {
    font-family: Poppins, sans-serif;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
ol, ul, nav {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
a {
    text-decoration: none;
    color: inherit;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
input, select {
    vertical-align: middle;
}
textarea {
    resize: none;
}
.hidden {
    display: none;
}
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
#__next {
  width: 100%;
  min-height: 100vh;
  position: relative;
  max-width: 100vw;

  ${breakpoints('width', '', [{ [tabletSm]: '100%' }, { [tabletLg]: '100%' }])}
}
.grecaptcha-badge { visibility: hidden; }
.slide-in-left {
    animation: slide-in-left 400ms ease-in-out forwards;
}
@keyframes slide-in-left {
    from {
        transform: translateX(-5px);
        opacity: 0%;
    }
    to {
        transform: translateX(0);
        opacity: 100%;
    }
}
`;

export default GlobalStyle;
