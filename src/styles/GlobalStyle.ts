import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.primary};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.primary};
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  /* Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.primary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.gradientEnd};
  }

  /* Selection Styles */
  ::selection {
    background: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.background};
  }
`;

export default GlobalStyle;
