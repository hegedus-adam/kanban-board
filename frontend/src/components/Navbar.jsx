import React from 'react';
import '../assets/navbar.css';
import { CgProfile } from 'react-icons/cg';

const Navbar = ({ user, logout }) => {
  return (
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">{user}</div>
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary" onClick={logout}>
                <strong>Sign out</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
