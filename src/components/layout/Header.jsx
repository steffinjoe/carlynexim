import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../../constants/navLinks';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.navContainer}>
          <Link to="/" className={styles.logo}>
            Carlyn<span>Exim</span>
          </Link>
          
          <button 
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className={isMenuOpen ? styles.open : ''}></span>
            <span className={isMenuOpen ? styles.open : ''}></span>
            <span className={isMenuOpen ? styles.open : ''}></span>
          </button>
          
          <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link 
                    to={link.path} 
                    className={styles.navLink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;