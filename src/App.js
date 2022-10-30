// import logo from './logo.png';
import './App.css';
// import { AppShell } from '@mantine/core';
// import AppShell from './component/AppShell';
// import HomePage from './component/pages/HomePage';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Layout from './component/Layout';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useState } from 'react';
import HomePage from './component/pages/HomePage';


function App() {
  const [colorScheme, setColorScheme] = useState('dark');
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />

    //   </header>
    // </div>
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        {/* <AppShell /> */}
        <HomePage />
      </MantineProvider>
    </ColorSchemeProvider>
   
  );
}

export default App;
