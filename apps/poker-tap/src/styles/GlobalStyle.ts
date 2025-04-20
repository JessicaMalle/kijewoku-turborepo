import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
