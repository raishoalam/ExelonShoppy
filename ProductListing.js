import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer'
import './productlist.css';

const ProductListing = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [priceRange, setPriceRange] = useState([0, 5000]);
    const [rating, setRating] = useState(0);
    const [brands, setBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('');

    useEffect(() => {
        // Fetch product data
        axios.get('https://dummyjson.com/products')
            .then((res) => {
                setProducts(res.data.products);
                setFilteredProducts(res.data.products);

                // Extract unique categories and brands
                const uniqueCategories = [...new Set(res.data.products.map(product => product.category))];
                setCategories(uniqueCategories);

                const uniqueBrands = [...new Set(res.data.products.map(product => product.brand))];
                setBrands(uniqueBrands);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        // Apply filters
        const filtered = products.filter(product =>
            product.price >= priceRange[0] && product.price <= priceRange[1] &&
            (selectedCategory ? product.category === selectedCategory : true) &&
            (rating ? product.rating >= rating : true) &&
            (selectedBrand ? product.brand === selectedBrand : true)
        );
        setFilteredProducts(filtered);
    }, [priceRange, selectedCategory, rating, selectedBrand, products]);

    const handleAddToCart = (product) => {
        // Get current cart from localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if the product is already in the cart
        const existingProductIndex = cart.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            // If product is already in the cart, increase its quantity
            cart[existingProductIndex].quantity += 1;
        } else {
            // If product is not in the cart, add it with quantity 1
            product.quantity = 1;
            cart.push(product);
        }

        // Save the updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <>
        <div className="product-listing">
            <div className="filters">
                {/* Price Range Filter */}
                <div>
                    <label>Price Range</label>
                    <input
                        type="range"
                        min="0"
                        max="5000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], e.target.value])}
                    />
                    <span>{priceRange[0]} - {priceRange[1]}</span>
                </div>

                {/* Category Filter */}
                <div>
                    <label>Category</label>
                    <select
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        value={selectedCategory}
                    >
                        <option value="">All Categories</option>
                        {categories.map((category, idx) => (
                            <option key={idx} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                {/* Rating Filter */}
                <div>
                    <label>Rating</label>
                    <input
                        type="number"
                        min="0"
                        max="5"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    />
                </div>

                {/* Brand Filter */}
                <div>
                    <label>Brand</label>
                    <select
                        onChange={(e) => setSelectedBrand(e.target.value)}
                        value={selectedBrand}
                    >
                        <option value="">All Brands</option>
                        {brands.map((brand, idx) => (
                            <option key={idx} value={brand}>{brand}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="product-cards">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <div className="product-info">
                            <h4>{product.name}</h4>
                            <p><strong>Price:</strong> ${product.price}</p>
                            <p><strong>Brand:</strong> {product.brand}</p>
                            <p><strong>Rating:</strong> {product.rating} ⭐</p>
                        </div>
                        <button
                            className="add-to-cart-btn"
                            onClick={() => handleAddToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
           
        </div>
        <Footer />
       </> 
    );
};

export default ProductListing;
