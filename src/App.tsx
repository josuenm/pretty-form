import Home from 'src/pages/Home';
import { GlobalStyles } from 'src/styles/GlobalStyles';
import { theme } from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
