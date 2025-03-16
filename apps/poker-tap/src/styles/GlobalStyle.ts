import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Chrome, Edge, Safari */
    ::-webkit-scrollbar {
        display: none; /* Cache la scrollbar */
    }

    /* Firefox */
    * {
        scrollbar-width: none;
        -moz-scrollbar-width: none;
    }

`;

export default GlobalStyle;
