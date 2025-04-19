import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContextProvider } from './context/ThemeContext';
import GlobalStyle from './styles/GlobalStyle';
import { lightTheme, darkTheme } from './styles/theme';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import ExtraCurricular from './components/ExtraCurricular';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

// Extend the default theme type
declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    background: string;
    text: string;
    secondaryBackground: string;
    cardBackground: string;
    navBackground: string;
    boxShadow: string;
    boxShadowHover: string;
    gradientStart: string;
    gradientEnd: string;
    border: string;
  }
}

const AppContent = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <ExtraCurricular />
      <Contact />
      <Footer />
      <ChatWidget />
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
};

export default App;
