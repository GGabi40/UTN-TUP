import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

const RegisterForm = ({ onRegister, setUser }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3000/api/user/register', {
        email,
        password
      });

      setMensaje('Registro exitoso.');

      const userData = res.data.user;

      if (!userData) {
        setMensaje("Error: No se recibió el usuario");
        return;
      }

      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      
      // callBack para actualizar estado global
      if(onRegister) onRegister(userData);
        
      // redirige al Home
      navigate('/');

    } catch (error) {
      setMensaje('Error al registrar: ' + error.response?.data?.message || error.message);
    }
  }

  return (
    <div>
      <form onSubmit={handleRegister} className='register-form'>
        <h2>Registrarse</h2>
        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password}
          minLength={4}
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Registrarse</button>
        {
          mensaje && <p>{mensaje}</p>
        }
    </form>

    <p>¿Ya tenés cuenta? <Link to="/login" style={{ textDecoration: 'underline' }}>Iniciar sesión</Link></p>
    </div>
  )
}

export default RegisterForm
