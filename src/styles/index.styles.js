import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    overflow-y: hidden;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-size: 1.6rem;
    line-height: 2;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }

  h1,
  h2,
  h3 {
    margin: 0;
    line-height: 1.5;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;