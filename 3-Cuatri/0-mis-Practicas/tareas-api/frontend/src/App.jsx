import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/user/Home';
import Login from './components/user/auth/LoginForm';
import Register from './components/user/auth/RegisterForm';
import Navbar from './components/navBar/NavBar';

function App() {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error al parsear user del localStorage:", error);
      localStorage.removeItem("user");
      return null;
    }
  });

  const handleRegister = (userData) => {
    setUser(userData);
  }

  return (
    <BrowserRouter>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
