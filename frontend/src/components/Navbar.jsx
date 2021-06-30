import React from 'react';
import '../assets/navbar.css';

const Navbar = ({ user, logout }) => {
  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-menu is-active">
        <div className="navbar-start">
          <div className="navbar-item">Kanban board</div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">{user}</div>
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-primary" onClick={logout}>
                <strong>Sign out</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
