import React from 'react';
// import logo from './logo.svg';
import './App.css';

import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import UpdatesPage from "./pages/UpdatesPage";
import FeedbackPage from "./pages/FeedbackPage";
import ReportsPage from "./pages/ReportsPage";
import TrilStudioPage from "./pages/TrilStudioPage";

import SiteHeader from "./components/SiteHeader";

const siteTheme = createTheme({
  palette: {
    mode: 'light',
    // mode: 'dark',
    primary: {
      main: '#9a3a3a',
    },
    secondary: {
      main: '#eeebfb',
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
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: '#1d1d1d',
          color: '#ffffff',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#101010',
          color: '#ffffff',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1d1d1d',
          color: '#ffffff',
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#101010',
          color: '#ffffff',
        },
      },
    },
  }
});

const App = () => {

  return (
    <ThemeProvider theme={siteTheme}>
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <SiteHeader />
        <Box
          height="100%"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          sx={{ m: 3 }}
        >
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="trilstudio" element={<TrilStudioPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="updates" element={<UpdatesPage />} />
            <Route path="feedback" element={<FeedbackPage />} />
            {/* <Route path="reports" element={<ReportsPage />} /> */}
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
