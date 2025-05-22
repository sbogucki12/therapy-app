//import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const getCurrentGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <h1 className={styles.logoText}>Mindful Path</h1>
          <p className={styles.logoSubtitle}>Your Daily Companion</p>
        </Link>
        
        <div className={styles.greeting}>
          <p className={styles.greetingText}>{getCurrentGreeting()}</p>
          <p className={styles.dateText}>{getCurrentDate()}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;