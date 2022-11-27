import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/system';

//* COMPONENTS
import { UserSignIn } from './components/auth/UserSignIn';

function App() {
  return (
    <Container disableGutters={true}>
      <Router>
        <Routes>
          <Route path="/" element={<UserSignIn />}/>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
