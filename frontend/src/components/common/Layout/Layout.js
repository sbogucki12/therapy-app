//import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Navigation />
      <main className={styles.main}>
        <div className={styles.container}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;