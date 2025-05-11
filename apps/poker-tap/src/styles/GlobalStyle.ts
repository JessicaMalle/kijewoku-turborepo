import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Dicier;
        src: url('/fonts/Dicier-Round-Heavy.woff2');
    }
    .dicier {
        font-family: Dicier, sans-serif;
        font-feature-settings: "liga" 1, "kern" 1, "calt" 1;
    }

    /* Stylisation de la scrollbar */
    /* Pour Chrome, Edge, et Safari */
    &::-webkit-scrollbar {
        width: 6px;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: rgba(0, 0, 0, 0.4);
    }

    /* Pour Firefox */
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;

    h1, h2, h3, h4, h5, h6 {
		    margin: 0;
    }

`;

export default GlobalStyle;
