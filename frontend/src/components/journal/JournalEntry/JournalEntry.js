//import React from 'react';
import styles from './JournalEntry.module.css';

const JournalEntry = () => {
  return (
    <div className={styles.container}>
      <h1>Journal Entry</h1>
      <p>Capture your thoughts and feelings...</p>
      <div className={styles.placeholder}>
        <p>📝 Journal entry form coming soon!</p>
      </div>
    </div>
  );
};

export default JournalEntry;