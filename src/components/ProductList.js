// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import styles from './ProductList.module.css'; // Importing CSS module

function ProductList({ products, productsPerPage, onUpdateProduct, onDeleteProduct }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    name: '',
    price: '',
    description: '',
    expiryDate: ''
  });

  useEffect(() => {
    setCurrentPage(1); // Reset to the first page when products change
  }, [products]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEdit = (product) => {
    setEditingProduct(product.name); // Use unique identifier (e.g., name)
    setEditedProduct(product);
  };

  const handleSave = () => {
    onUpdateProduct(editedProduct);
    setEditingProduct(null);
  };

  const handleDelete = (product) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
      onDeleteProduct(product);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  return (
    <div className={styles.productList}>
      <table className={styles.productTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Expiry Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product, index) => (
            <tr key={index}>
              <td>{editingProduct === product.name ? <input type="text" name="name" value={editedProduct.name} onChange={handleChange} /> : product.name}</td>
              <td>{editingProduct === product.name ? <input type="number" name="price" value={editedProduct.price} onChange={handleChange} /> : product.price}</td>
              <td>{editingProduct === product.name ? <textarea name="description" value={editedProduct.description} onChange={handleChange} /> : product.description}</td>
              <td>{editingProduct === product.name ? <input type="date" name="expiryDate" value={editedProduct.expiryDate} onChange={handleChange} /> : product.expiryDate}</td>
              <td>
                {editingProduct === product.name ? (
                  <button onClick={handleSave}>Save</button>
                ) : (
                  <>
                    <button onClick={() => handleEdit(product)}>Edit</button>
                    <button onClick={() => handleDelete(product)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.pagination}>
        {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map(number => (
          <button key={number + 1} onClick={() => paginate(number + 1)}>
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
