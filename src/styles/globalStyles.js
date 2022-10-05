import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        --primary-font: 'Poppins', sans-serif;
        --logo-font: 'Koulen', cursive;
        --background-color: linear-gradient(90deg, rgba(30,59,142,1) 0%, rgba(37,98,233,1) 100%);
    }
    
    *{
        color: white;
        font-family: var(--primary-font);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    h1{
        font-weight: 600;
        font-size: 30px;
    }

    h2{
        font-weight: 300;
        font-size: 18px;
    }

    h3{
        font-weight: 400;
        font-size: 18px;
    }

    a:link {
        text-decoration: none;
    }

    a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    a:active {
        text-decoration: none;
    }
`;
