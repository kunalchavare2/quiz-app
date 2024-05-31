import { css } from "styled-components";
import poppinsLight from "../assets/fonts/Poppins-Light.ttf";
import poppinsRegular from "../assets/fonts/Poppins-Regular.ttf";
import poppinsMedium from "../assets/fonts/Poppins-Medium.ttf";
import poppinsBold from "../assets/fonts/Poppins-Bold.ttf";
import poppinsSemiBold from "../assets/fonts/Poppins-SemiBold.ttf";
import poppinsExtraBold from "../assets/fonts/Poppins-ExtraBold.ttf";
import { fontWeight } from "../utils/constant/style-const";

const fontFaces = css`

    @font-face {
        font-family: 'Open Sans', sans-serif;
        url(${poppinsLight}) format('woff2'),
        font-weight: ${fontWeight.light};
        font-style: normal;
    }
    @font-face {
        font-family: 'Open Sans', sans-serif;
        url(${poppinsRegular}) format('woff2'),
        font-weight: ${fontWeight.regular};
        font-style: normal;
    } 
    @font-face {
        font-family: 'Open Sans', sans-serif;
        url(${poppinsMedium}) format('woff2'),
        font-weight: ${fontWeight.medium};
        font-style: normal;
    } 
    @font-face {
        font-family: 'Open Sans', sans-serif;
        url(${poppinsSemiBold}) format('woff2'),
        font-weight: ${fontWeight.semiBold};
        font-style: normal;
    } 
    @font-face {
        font-family: 'Open Sans', sans-serif;
        url(${poppinsBold}) format('woff2'),
        font-weight: ${fontWeight.bold};
        font-style: normal;
    }
    @font-face {
        font-family: 'Open Sans', sans-serif;
        url(${poppinsExtraBold}) format('woff2'),
        font-weight: ${fontWeight.extraBold};
        font-style: normal;
    }
`;

export default fontFaces;
