import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import '../styles/productlist.css';

const ProductList = ({ searchQuery }) => {
  const { products, removeProduct } = useContext(ProductContext);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRemove = (productName) => {
    removeProduct(productName);
  };

  return (
    <div className="product-list">
      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product, index) => (
            <li key={index} className="product-item">
              <span>{product.name} - ${product.price.toFixed(2)}</span>
              <button onClick={() => handleRemove(product.name)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Product Found</p>
      )}
    </div>
  );
};

export default ProductList;
