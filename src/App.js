import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css'

//* Context api
import { SiteProvider } from './context/Context';
import { PrivateRoute } from './context/PrivateRoute';

//* COMPONENTS
import { UserSignIn } from './components/pages/UserSignIn';
import { UserSignUp } from './components/pages/UserSignUp';
import { PhoneSignUp } from './components/pages/PhoneSignUp';
import { MainPage } from './components/pages/MainPage';
import { PhoneSignIn } from './components/pages/PhoneSignIn';
import { ResetPassword } from './components/pages/ResetPassword';
import { JoinPage } from './components/pages/JoinPage';
import { StartPage } from './components/pages/StartPage';

//* Widgets
import { Footer } from './components/widgets/Footer';
import { Game } from './components/pages/inGame/Game';

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
        <Container disableGutters={true} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Router>
            <Routes>
              <Route path='/' element={<PrivateRoute><MainPage /></PrivateRoute>}/> 
              <Route path="/signin" element={<UserSignIn />}/> 
              <Route path='/signup' element={<UserSignUp />}/>
              <Route path='/phonesignup' element={<PhoneSignUp />}/>
              <Route path='/phonesignin' element={<PhoneSignIn />}/>
              <Route path='/resetpassword' element={<ResetPassword />}/>
              <Route path='/join' element={<JoinPage />}/>
              <Route path='/start' element={<StartPage />}/>
              <Route path='/game' element={<Game />}/>
            </Routes>
          </Router>
          <Footer sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </SiteProvider>
  );
}

export default App;
