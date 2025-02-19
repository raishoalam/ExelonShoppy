import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Using Routes instead of Switch
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import Cart from './components/Cart';
import Header from './components/Header';
import './App.css'; // Global styles

const App = () => {
    return (
        <Router>
            <Header />
            <div className="app-content">
                <Routes>  {/* Changed from Switch to Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ProductListing />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
