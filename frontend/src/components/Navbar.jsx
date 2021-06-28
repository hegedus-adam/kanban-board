import React from 'react';
import '../assets/navbar.css';

const Navbar = ({ user, logout }) => {
  return (
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" class="navbar-menu is-active">
        <div class="navbar-start">
          <div class="navbar-item">Kanban board</div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">{user}</div>
          <div class="navbar-item">
            <div class="buttons">
              <button class="button is-primary" onClick={logout}>
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
