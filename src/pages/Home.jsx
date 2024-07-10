import React, { useState } from 'react';
import AddProductForm from '../components/AddProductForm';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import { ProductProvider } from '../context/ProductContext';
import '../styles/home.css'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <ProductProvider>
      <div className="home-container">
        <h1>Product Page</h1>
        <button className="logout-button" onClick={handleLogout}>
      Logout
    </button>
        <AddProductForm />
        <SearchBar onSearch={setSearchQuery} />
        <ProductList searchQuery={searchQuery} />
      </div>
    </ProductProvider>
  );
};

export default Home;