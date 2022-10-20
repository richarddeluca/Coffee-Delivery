import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  /* color-scheme: light dark; */

}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    /* outline: 0;
    box-shadow: 0px 0px 4px 2px green; */
    }
  

  border-style, input, textarea, button {
    font-family: Roboto, Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
  
  a{}
  
  button {
  cursor: pointer;
}

`
