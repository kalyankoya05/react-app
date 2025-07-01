// src/components/AddProductForm.js
import React, { useState } from 'react';
import ErrorModal from './ErrorModal';
import SuccessModal from './SuccessModal';
import styles from './AddProductForm.module.css'; // Importing CSS module

function AddProductForm({ onAddProduct }) {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    expiryDate: ''
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'price' && !/^\d*$/.test(value)) {
      // Only accept digits in the price field
      return;
    }
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields and validate product name length
    for (const key in product) {
      if (product[key].trim() === '') {
        setError(`The ${key} field is required.`);
        return;
      }
      if (key === 'name' && product[key].trim().length < 3) {
        setError('The product name must contain at least three characters.');
        return;
      }
    }

    onAddProduct(product);
    setProduct({ name: '', price: '', description: '', expiryDate: '' });
    setSuccess(true); // Show success modal
  };

  const closeModal = () => {
    setError(null); // Close the error modal
    setSuccess(false); // Close the success modal
  };

  return (
    <div>
      {error && <ErrorModal message={error} onClose={closeModal} />}
      {success && <SuccessModal message="Product Added Successfully!" onClose={closeModal} />}
      <form className={styles.addProductForm} onSubmit={handleSubmit}>
        <h3>Add Product</h3>
        <div className={styles.formGroup}>
          <label htmlFor="name">Product Name:</label>
          <input type="text" id="name" name="name" value={product.name} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" name="price" value={product.price} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={product.description} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input type="date" id="expiryDate" name="expiryDate" value={product.expiryDate} onChange={handleChange} />
        </div>
        <button type="submit" className={styles.btn}>Add Product</button>
      </form>
    </div>
  );
}

export default AddProductForm;
