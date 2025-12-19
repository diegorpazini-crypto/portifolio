import React from 'react';
import { FiHome, FiFileText, FiSun, FiMoon } from 'react-icons/fi';
import './Navigation.css';

function Navigation({ currentPage, setCurrentPage, theme, toggleTheme }) {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <h1>Diego Pazini</h1>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <button 
              className={`nav-link ${currentPage === 'inicio' ? 'active' : ''}`}
              onClick={() => setCurrentPage('inicio')}
            >
              <FiHome className="nav-icon" />
              Início
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${currentPage === 'curriculo' ? 'active' : ''}`}
              onClick={() => setCurrentPage('curriculo')}
            >
              <FiFileText className="nav-icon" />
              Currículo
            </button>
          </li>
          <li className="nav-item theme-toggle">
            <button 
              className="nav-link theme-btn"
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
            >
              {theme === 'dark' ? <FiSun className="nav-icon" /> : <FiMoon className="nav-icon" />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
