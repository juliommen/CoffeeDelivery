import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
   box-sizing:border-box;
   margin:0;
   padding:0; 
  }

  :focus{
    outline:0;
  }
  
  body {
    max-width:100vw;
    height:100vh;
    background-color: ${(props) => props.theme['background-color']};
    color: ${(props) => props.theme['base-text']};
  }

  body, input, text-area, button {
    font-family: 'Roboto', sans-serif;
    font-size:1rem;
    font-weight:400;
  }
`
