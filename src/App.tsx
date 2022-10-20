import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/Global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>hi lorena</h1>
      <h2>Hilander</h2>
      <p>
        mostradamus para quem <a href="/">nos</a> damos
      </p>
      <button>Okey</button>
      <input type="text" />
      <p>para ai</p>
      <button>ochi</button>
    </ThemeProvider>
  )
}

export default App
