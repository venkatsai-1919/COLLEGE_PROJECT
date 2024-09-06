import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">GPREC NOTES</div>
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li className='dropbtn'>
           <div className='h'> <Link to="/">HOME</Link>
           </div>
           
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleNavbar}>
          <div className={`bar ${isOpen ? 'change' : ''}`}></div>
          <div className={`bar ${isOpen ? 'change' : ''}`}></div>
          <div className={`bar ${isOpen ? 'change' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
