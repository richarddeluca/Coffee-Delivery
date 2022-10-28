import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/Global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CoffeesContextProvider } from './contexts/coffeesContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <CoffeesContextProvider>
          <Router />
        </CoffeesContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
