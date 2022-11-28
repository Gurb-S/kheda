import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css'

//* COMPONENTS
import { UserSignIn } from './components/auth/UserSignIn';
import { Footer } from './components/widgets/Footer';


//* 
const font = "'Inder', sans-serif";

const theme = createTheme({
  typography: {
    fontFamily: font
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#EE3B55',
      light: '#1976d2'
    },
    secondary:{
      main: '#FFFEFE',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters={true}>
        <Router>
          <Routes>
            <Route path="/" element={<UserSignIn />}/>
          </Routes>
        </Router>
        <Footer sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
