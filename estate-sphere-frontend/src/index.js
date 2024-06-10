import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Ensure correct import for ThemeProvider

// Correct the theme configuration
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(239, 156, 102)', // Correct color format
    },
    secondary: {
      main: '#C8CFA0',
    },
    // Custom palette values need to be accessed directly via the theme instance in your components
    third: {
      main: 'rgb(120, 171, 168)', // Correct color format
    },
    fourth: {
      main: 'rgb(252, 220, 148)', // Correct color format
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>  // Wrap App with ThemeProvider
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
