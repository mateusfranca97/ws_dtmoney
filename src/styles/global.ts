import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --header-gradient: linear-gradient(180deg, rgba(196,196,196,1) 0%, rgba(196,196,196,0) 100%);
        --text-title: #545454;
        --orange: #E99D14;
        /* --background-image: url('../assets/background.svg'); */
    }

    *{
        /* border: 1px solid #000; */

        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{ 
        @media (min-width: 1080px){
            font-size: 93.75%
        }

        @media (min-width: 720px){
            font-size: 87.5%
        }
    }

    body{
        /* backgroundImage: var(--background-image) */
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 ,strong {
        font-weight: 600;
        font-family:'Barlow', sans-serif;
    }

    button{
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`
