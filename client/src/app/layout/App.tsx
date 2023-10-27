import Catalog from '../../features/catalog/Catalog';
import Header from './Header';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import './styles.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import AboutPage from '../../features/about/AboutPage';
import ContactPage from '../../features/contact/ContactPage';
import ProductDetails from '../../features/catalog/ProductDetails';

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
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<ProductDetails />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;


