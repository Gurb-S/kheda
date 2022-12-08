import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css'
import { SiteProvider } from './context/Context';

//* COMPONENTS
import { UserSignIn } from './components/pages/UserSignIn';
import { UserSignUp } from './components/pages/UserSignUp';
import { PhoneSignUp } from './components/pages/PhoneSignUp';

//* Widgets
import { Footer } from './components/widgets/Footer';
import { MainPage } from './components/pages/MainPage';
import { PhoneSignIn } from './components/pages/PhoneSignIn';
import { ResetPassword } from './components/pages/ResetPassword';
import { PrivateRoute } from './context/PrivateRoute';



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
      light: '#78A1D1',
      dark: '#ef9a9a'
    },
  },
});

function App() {
  return (
    <SiteProvider>
    <ThemeProvider theme={theme}>
      <Container disableGutters={true}>
        <Router>
          <Routes>
            <Route path="/" element={<UserSignIn />}/>
            <Route path='/home' element={<MainPage />}/>
            <Route path='/signup' element={<UserSignUp />}/>
            <Route path='/phonesignup' element={<PhoneSignUp />}/>
            <Route path='/phonesignin' element={<PhoneSignIn />}/>
            <Route path='/resetpassword' element={<ResetPassword />}/>
          </Routes>
        </Router>
        <Footer sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </SiteProvider>
  );
}

export default App;
