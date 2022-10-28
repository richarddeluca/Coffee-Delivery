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
    outline: 0;
    box-shadow: 0px 0px 3px 1px ${(props) => props.theme['purple-dark']};
    }
  

  border-style, input, textarea, button {
    font-family: Roboto, Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
  
  a{}
  
  body{
    font-family: Roboto, Inter, Avenir, Helvetica, Arial, sans-serif;
    background-color: ${(props) => props.theme['background-']}
  }
  button {
  cursor: pointer;
}

h1, h2, h3 {
  font-family: 'Baloo 2', Inter, Avenir, Helvetica, Arial, sans-serif;
}

h1{
  color: ${(props) => props.theme['base-title']}
}

h2, h3{
  color: ${(props) => props.theme['base-subtitle']}
}

p, span{
  color: ${(props) => props.theme['base-text']}
}
`
