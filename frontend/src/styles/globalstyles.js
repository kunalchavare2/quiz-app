import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import fontFaces from "./fonts";

const GlobalStyles = createGlobalStyle`
/* To reset the default styles */
${reset}

/* To added the required font styles */
${fontFaces}



body {
    font-family: "Poppins", sans-serif;
    transition: all 0.25s linear;
    height: 100vh;
   
}


`;

export default GlobalStyles;
