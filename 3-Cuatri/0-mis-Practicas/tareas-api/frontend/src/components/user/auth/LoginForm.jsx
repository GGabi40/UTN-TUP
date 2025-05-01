import React from 'react'
import axios from 'axios';

import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({ setUser }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!emailRef.current.value.length) {
      setError("Email vacío.")
      return;
    } else if (!passwordRef.current.value.length) {
      setError("Password vacío.")
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/api/user/login', {
        email, password
      });

      if(res.status === 200) {
        localStorage.setItem("user", JSON.stringify(res.data.user)); // guarda el usuario completo
        setUser(res.data.user); // ⚠️ pasar `setUser` por props si lo necesitás
        navigate("/");
      }
    } catch (error) {
      // console.error(error);
      setError("Credenciales incorrectas");
    }

  }

  return (
    <div className='container-form-login'>
        <form onSubmit={handleSubmit} className='form-login'>
          <h2>Iniciar Sesión</h2>
          <input 
            type="email" 
            placeholder='Ingrese un correo electrónico'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
            required
          />

          <input 
            type="password" 
            placeholder='Ingrese su contraseña'
            value={password}
            ref={passwordRef}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type="submit" value="Ingresar" />
          {
            error && <p style={{ color: 'red' }}>{error}</p>
          }
        </form>

        <p>¿Todavía no tenés una cuenta? <Link to="/register" style={{ textDecoration: 'underline' }}>Registrar Usuario</Link></p>
    </div>
  )
}

export default LoginForm