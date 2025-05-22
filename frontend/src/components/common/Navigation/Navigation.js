import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/morning', label: 'Morning', icon: '🌅' },
    { path: '/evening', label: 'Evening', icon: '🌙' },
    { path: '/journal', label: 'Journal', icon: '📝' },
    { path: '/journal-history', label: 'History', icon: '📚' },
    { path: '/profile', label: 'Profile', icon: '👤' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* Mobile menu button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Navigation links */}
        <ul className={`${styles.navList} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          {navItems.map((item) => (
            <li key={item.path} className={styles.navItem}>
              <Link
                to={item.path}
                className={`${styles.navLink} ${isActiveLink(item.path) ? styles.active : ''}`}
                onClick={closeMobileMenu}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                <span className={styles.navLabel}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;