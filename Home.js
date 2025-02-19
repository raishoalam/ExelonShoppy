import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCarousel from '../components/ProductCarousel';
import Footer from '../components/Footer'

import './Home.css';

const Home = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [newArrivals, setNewArrivals] = useState([]);
    const [flashDeals, setFlashDeals] = useState([]);

    // Placeholder image if product image is not available
    const placeholderImage = "https://media1.calvinklein.com/images/20250208/HP/NA_1_2x.webp";

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get('https://dummyjson.com/products');
            setFeaturedProducts(res.data.products.slice(0, 5)); // first 5 products for carousel
            setNewArrivals(res.data.products.slice(5, 10)); // next 5 products for new arrivals
            setFlashDeals(res.data.products.slice(10, 15)); // flash deals section
        };
        fetchProducts();
    }, []);

    return (
        <div className="home">
            <ProductCarousel products={featuredProducts} />
            <h2>New Arrivals</h2>
            <div className="product-cards">
                {newArrivals.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image || placeholderImage} alt={product.name} />
                        <div className="product-info">
                            <h4>{product.name}</h4>
                            <p><strong>Price:</strong> ${product.price}</p>
                            <p><strong>Brand:</strong> {product.brand}</p>
                            <p><strong>Rating:</strong> {product.rating} ⭐</p>
                        </div>
                    </div>
                ))}
            </div>

            <h2>Flash Deals</h2>
            <div className="product-cards">
                {flashDeals.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image || placeholderImage} alt={product.name} />
                        <div className="product-info">
                            <h4>{product.name}</h4>
                            <p><strong>Price:</strong> ${product.price}</p>
                            <p><strong>Brand:</strong> {product.brand}</p>
                            <p><strong>Rating:</strong> {product.rating} ⭐</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
