import Catalog from '../../features/catalog/Catalog';
import Header from './Header';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import './styles.css';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const themeType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: themeType,
      background: {
        default: themeType === "light" ? "#eaeaea" : "#140b0bd6"
      }
    }
  })
  function ToggleTheme() {
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header onChange={ToggleTheme} darkMode={darkMode}/>
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;


