import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material'
import { purple } from '@mui/material/colors'



const theme = createTheme({
  palette: {
    primary: {
      main: '#007545',
    },
    secondary: purple,
    background: {
      default: '#fdffdb', 
    },
    text: {
      primary: '#004715',
    },
  },
  typography: {
    fontFamily: 'Times New Roman, serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
