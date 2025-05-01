import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../user/auth/Logout';

const Navbar = ({ user, setUser }) => {
  return (
    <nav>
      <div>
        <Link to="/" className='navbar-logo'>📝 TaskApp</Link>
      </div>
      <div>
        {user ? (
          <>
            <span className='navbar-email'>{user.email}</span>
            <Logout setUser={setUser} />
          </>
        ) : (
          <>
            <Link to="/login" className='navbar-links'>Login</Link>
            <Link to="/register" className='navbar-links'>Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
