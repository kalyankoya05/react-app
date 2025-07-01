// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';
import styles from './Dashboard.module.css'; // Importing CSS module

// Functions to handle local storage
const saveProductsToLocalStorage = (products) => {
  localStorage.setItem('products', JSON.stringify(products));
};

const getProductsFromLocalStorage = () => {
  const products = localStorage.getItem('products');
  return products ? JSON.parse(products) : [];
};

function Dashboard() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(getProductsFromLocalStorage());
  const [filteredProducts, setFilteredProducts] = useState(getProductsFromLocalStorage());
  const [productsPerPage, setProductsPerPage] = useState(5);

  useEffect(() => {
    saveProductsToLocalStorage(products);
  }, [products]);

  const handleLogout = () => {
    navigate('/');
  };

  const handleAddProduct = (product) => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  const handleUpdateProduct = (updatedProduct) => {
    const updatedProducts = products.map(product =>
      product.name === updatedProduct.name ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  const handleDeleteProduct = (productToDelete) => {
    const updatedProducts = products.filter(product => product.name !== productToDelete.name);
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
    
  };

  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.dashboardHeader}>
        <h2>Inventory App</h2>
        <button onClick={handleLogout} className={styles.btnLogout}>Logout</button>
      </header>
      <div className={styles.bottomPanel}>
        <div className={styles.leftPanel}>
          <AddProductForm onAddProduct={handleAddProduct} />
        </div>
        <div className={styles.rightPanel}>
          <div className={styles.searchFilterContainer}>
            <SearchBar onSearch={handleSearch} />
            <select className={styles.filterSelect} onChange={(e) => setProductsPerPage(Number(e.target.value))}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <ProductList
            products={filteredProducts}
            productsPerPage={productsPerPage}
            onUpdateProduct={handleUpdateProduct}
            onDeleteProduct={handleDeleteProduct}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
