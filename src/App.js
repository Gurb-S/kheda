import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

//* COMPONENTS
import { UserSignIn } from './components/auth/UserSignIn';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#EE3B55',
      light: '#03a9f4'
    },
    secondary:{
      main: '#FFFEFE'
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
