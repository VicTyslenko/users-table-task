import { createGlobalStyle } from "styled-components";

export const Fonts = createGlobalStyle`
   @font-face {
        font-family: 'AvenirNextCyr';
        src: url('/fonts/AvenirNextCyr/AvenirNextCyr-Light.woff2') format('woff2'), url('/fonts/AvenirNextCyr/AvenirNextCyr-Light.woff') format('woff'),
        url('/fonts/AvenirNextCyr/AvenirNextCyr-Light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'AvenirNextCyr';
        src: url('/fonts/AvenirNextCyr/AvenirNextCyr-Regular.woff2') format('woff2'), url('/fonts/AvenirNextCyr/AvenirNextCyr-Regular.woff') format('woff'),
        url('/fonts/AvenirNextCyr/AvenirNextCyr-Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'AvenirNextCyr';
        src: url('/fonts/AvenirNextCyr/AvenirNextCyr-Medium.woff2') format('woff2'), url('/fonts/AvenirNextCyr/AvenirNextCyr-Medium.woff') format('woff'),
        url('/fonts/AvenirNextCyr/AvenirNextCyr-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'AvenirNextCyr';
        src: url('/fonts/AvenirNextCyr/AvenirNextCyr-Demi.woff2') format('woff2'), url('/fonts/AvenirNextCyr/AvenirNextCyr-Demi.woff') format('woff'),
        url('/fonts/AvenirNextCyr/AvenirNextCyr-Demi.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'AvenirNextCyr';
        src: url('/fonts/AvenirNextCyr/AvenirNextCyr-Bold.woff2') format('woff2'), url('/fonts/AvenirNextCyr/AvenirNextCyr-Bold.woff') format('woff'),
        url('/fonts/AvenirNextCyr/AvenirNextCyr-Bold.ttf') format('truetype');
        font-weight: 800;
        font-style: normal;
    }

`;
