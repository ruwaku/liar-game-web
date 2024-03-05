"use client";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@font-face {
    font-family: 'KCC-DodamdodamR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/KCC-DodamdodamR.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

:root {
  font-size: 25px;
  height: 100%;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: ${(p) => p.theme.fonts.sans};
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  color: ${(props) => props.theme.palette.primary.foreground};
  background: ${(props) => props.theme.palette.primary.background};
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
}

/* https://www.joshwcomeau.com/css/custom-css-reset/
*/
*, :after, :before {box-sizing:border-box}
* {margin:0}
body {-webkit-font-smoothing:antialiased;line-height:1.4}
canvas, img, picture, svg, video {display:block;max-width:100%}
button, input, select, textarea {font:inherit}
h1, h2, h3, h4, h5, h6, p {overflow-wrap:break-word}
#__next, #root {isolation:isolate}

@media print {
  * {print-color-adjust:exact}
  body, html {overflow:visible}
}

@media screen and (max-width:${(p) => p.theme.breakpoints.s}px) {
  :root {
    font-size: 22px;
  }
}
@media screen and (max-width:${(p) => p.theme.breakpoints.xs}px) {
  :root {
    font-size: 20px;
  }
}
`;
