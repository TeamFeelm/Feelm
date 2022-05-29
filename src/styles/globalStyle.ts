import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style-type: none;
  }

  input, button {
    outline: none; 
    border: none;
    background-color: transparent;
  }

  button {
    padding: 0;
    cursor: pointer;
  }

  textarea {
    border: none;
    background-color: transparent;
    resize: none;
    outline: none;
  }

  ::selection {
    color: #fff;
    background: blue;
  }

  ::-moz-selection {
    color: #fff;
    background: blue;
  }

  @font-face {
    font-family: 'SSD';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205@1.0/SuseongDotum.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  h2 {
    font-size: clamp(2rem, 4vw + 1rem, 5rem);
    font-family: 'SSD';
  }


`;

export default GlobalStyle;
