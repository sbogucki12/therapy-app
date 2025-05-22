//import React from 'react';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <div className={styles.container}>
      <h1>User Profile</h1>
      <p>Customize your experience and define your values...</p>
      <div className={styles.placeholder}>
        <p>👤 Profile settings coming soon!</p>
      </div>
    </div>
  );
};

export default UserProfile;