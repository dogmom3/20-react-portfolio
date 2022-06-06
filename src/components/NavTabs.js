import React from 'react';
// import { capitalizeFirstLetter } from "../utils/helpers";

function NavTabs({ currentPage, handlePageChange }) {
  return (
<header>
    <ul className="nav-list">
      <li className="nav-item">
        <a href="#about" onClick={() => handlePageChange('About')}
          className='nav-link'>About</a>
      </li>
      <li className="nav-item">
        <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}
          className='nav-link'>Portfolio</a>
      </li>
      <li className="nav-item">
        <a href="#resume" onClick={() => handlePageChange('Resume')}
          className='nav-link'>Resume</a>
      </li>
      <li className="nav-item">
        <a href="#contact" onClick={() => handlePageChange('Contact')}
          className='nav-link'>Contact</a>
      </li>
    </ul>
    </header>
  );
}

export default NavTabs;
