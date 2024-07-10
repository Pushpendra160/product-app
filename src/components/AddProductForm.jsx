// src/AddProductForm.js
import React, { useState, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import '../styles/addproductform.css'
const AddProductForm = () => {
  const { products, addProduct } = useContext(ProductContext);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName || !price) {
      setError('Please enter both product name and price.');
      return;
    }
    const existingProduct = products.find((product) => product.name === productName);
    if (existingProduct) {
      setError('Product already exists.');
      return;
    }
    addProduct({ name: productName, price: parseFloat(price) });
    setProductName('');
    setPrice('');
    setError('');
  };

  return (
    <div className="add-product-form">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProductForm;
