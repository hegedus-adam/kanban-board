import React from 'react';
import '../assets/navbar.scss';

const Navbar = ({ user, logout }) => {
  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <p>
          <strong>Kanban board</strong>
        </p>
      </div>
      <div className="navbar-right">
        <p>
          <strong>{user}</strong>
        </p>
        <button className="sign-button" onClick={logout}>
          Log out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
