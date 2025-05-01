import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = ({ setUser }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);

        alert('¡Sesión cerrada!');
        navigate('/login');
    }

  return (
    <div>
        <button onClick={handleLogout} style={{ float: 'right', marginTop: '-30px' }}>
            Cerrar sesión
        </button>
    </div>
  )
}

export default Logout