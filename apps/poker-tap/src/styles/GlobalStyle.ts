import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Round variants */
    @font-face {
        font-family: Dicier-Round-Light;
        src: url('/fonts/Dicier-Round-Light.woff2');
    }
    @font-face {
        font-family: Dicier-Round-Heavy;
        src: url('/fonts/Dicier-Round-Heavy.woff2');
    }
    @font-face {
        font-family: Dicier-Round-Dark;
        src: url('/fonts/Dicier-Round-Dark.woff2');
    }

    /* Flat variants */
    @font-face {
        font-family: Dicier-Flat-Light;
        src: url('/fonts/Dicier-Flat-Light.woff2');
    }
    @font-face {
        font-family: Dicier-Flat-Heavy;
        src: url('/fonts/Dicier-Flat-Heavy.woff2');
    }
    @font-face {
        font-family: Dicier-Flat-Dark;
        src: url('/fonts/Dicier-Flat-Dark.woff2');
    }

    /* Block variants */
    @font-face {
        font-family: Dicier-Block-Light;
        src: url('/fonts/Dicier-Block-Light.woff2');
    }
    @font-face {
        font-family: Dicier-Block-Heavy;
        src: url('/fonts/Dicier-Block-Heavy.woff2');
    }
    @font-face {
        font-family: Dicier-Block-Dark;
        src: url('/fonts/Dicier-Block-Dark.woff2');
    }

    /* Pixel variant */
    @font-face {
        font-family: Dicier-Pixel;
        src: url('/fonts/Dicier-Pixel.woff2');
    }

    /* For backward compatibility */
    @font-face {
        font-family: Dicier;
        src: url('/fonts/Dicier-Round-Heavy.woff2');
    }

    .dicier {
        font-feature-settings: "liga" 1, "kern" 1, "calt" 1;
    }
    
    * {
        box-sizing: border-box;
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
