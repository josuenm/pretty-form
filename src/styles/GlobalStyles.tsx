import { createGlobalStyle } from 'styled-components'




export const GlobalStyles = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    ::-webkit-scrollbar {
        width: 0.5rem;
        background: #131313;
    }
    
    ::-webkit-scrollbar-thumb {
        background: #353535;
        border-radius: 3rem;
    }

    body {
        font-family: 'Roboto', sans-serif;
    }
`