// src/components/ErrorModal.js
import React from 'react';
import styles from './ErrorModal.module.css'; // Importing CSS module

function ErrorModal({ message, onClose }) {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <p>{message}</p>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ErrorModal;
