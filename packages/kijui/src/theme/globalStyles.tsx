import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: "Poppins", serif;
    font-size: clamp(1rem, 1em + 0.25vw, 1.25rem);
  }
`;

export default GlobalStyle;
