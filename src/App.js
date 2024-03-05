// App.js
import { Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import auth from './pages/login/firebase';
import Login from './pages/login/Login';
import Ostrander from './pages/ostrander/Ostrander.jsx'
import Crownhart from './pages/crownhart/Crownhart'
import Cm from './pages/cm/Cm'
import Hawkes from './pages/hawkes/Hawkes'
import Ross from './pages/ross/Ross'

function App() {
  const [user, setUser] = useState(null);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return (
      <Routes>
        <Route path="/" element={user ? <Ostrander /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ostrander" element={<Ostrander />} />
        <Route path="/crownhart" element={<Crownhart />} />
        <Route path="/cm" element={<Cm />} />
        <Route path="/ross" element={<Ross />} />
        <Route path="/hawkes" element={<Hawkes />} />
      </Routes>
  );
}

export default App;
