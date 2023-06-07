import React from 'react';
// import logo from './logo.svg';
import './App.css';

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';

import SiteHeader from "./components/SiteHeader";
import MainPage from "./pages/MainPage";

const App = () => {

  const siteTheme = createTheme({
    palette: {
      mode: 'light',
      // mode: 'dark',
      primary: {
        // main: '#5e1a1a',
        main: '#9a3a3a',
        // main: '#641a1a',
      },
      secondary: {
        // main: '##efebfb',
        main: '#eeebfb',
        // main: '#fbebeb',     
      },
      // divider: '#964d4d',
      divider: '#a74d4e',
    },
    typography: {
      // fontFamily: 'Montserrat',
      fontFamily: 'Maven Pro',
      h1: {
        fontFamily: 'Jura',
      },
      h2: {
        fontFamily: 'Jura',
      },
      h3: {
        fontFamily: 'Jura',
      },
      h4: {
        fontFamily: 'Jura',
      },
      h5: {
        fontFamily: 'Jura',
      },
      h6: {
        fontFamily: 'Jura',
      },
      caption: {
        fontFamily: 'Jura',
      },
    },
    components: {
      // Name of the component
      // MuiButton: {
      //   styleOverrides: {
      //     // Name of the slot
      //     root: {
      //       // Some CSS
      //       fontSize: '1rem',
      //     },
      //   },
      // },
      MuiAccordion: {
        styleOverrides: {
          root: {
            backgroundColor: '#1d1d1d',
            // backgroundColor: '#964d4d',
            color: '#ffffff',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#101010',
            // backgroundColor: '#964d4d',
            color: '#ffffff',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: '#1d1d1d',
            // backgroundColor: '#964d4d',
            color: '#ffffff',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            // backgroundColor: '#1d1d1d',
            backgroundColor: '#101010',
            color: '#ffffff',
          },
        },
      },
    }
  });

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={siteTheme}>
          {/* <Box
            height="100vh"
            display="flex"
            justifyContent="center"
            flexDirection="column"
          > */}
          <Box
            height="100%"
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            <SiteHeader />
            <MainPage />
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
