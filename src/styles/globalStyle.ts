import { createGlobalStyle } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    display: none;
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

  nav {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 0px;
    top: 0px;
    z-index: 10;
    background-color: white;
  }

  main {
    position: relative;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
  }

  
`;

export default GlobalStyle;
