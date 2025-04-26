import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'AvenirNextCyr', sans-serif !important;
    }

    html,
    body,
    #root {
        position: relative;
        height: 100vh;
        background: linear-gradient(to bottom,rgb(234, 240, 255) 0%, #f6f9fc 100%);
   }

    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
        border: 1px solid transparent;
        border-radius: 20px;
        box-shadow: rgb(0 0 0 / 24%) 0 0 0 20px inset;
        transition: all 0.3s ease;

        &:hover {
            border: 24px solid rgb(0 0 0 / 24%);
            border-radius: 24px;
            box-shadow: rgb(0 0 0 / 24%) 0 0 0 32px inset;
        }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        appearance: none;
        margin: 0;
    }

    input[type='number'] {
        appearance: textfield; /* Firefox */
    }

    a {
        text-decoration: none;
        color: #fff;
    }

    li {
        list-style: none;
    }


 
`;
