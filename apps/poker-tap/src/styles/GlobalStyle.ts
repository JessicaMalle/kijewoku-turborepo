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
    
    h1, h2, h3, h4, h5, h6 {
		    margin: 0;
    }

`;

export default GlobalStyle;
