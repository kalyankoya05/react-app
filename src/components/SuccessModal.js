// src/components/SuccessModal.js
import React from 'react';
import styles from './SuccessModal.module.css'; // Importing CSS module

function SuccessModal({ message, onClose }) {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <p>{message}</p>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default SuccessModal;
