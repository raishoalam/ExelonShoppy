import React from 'react';
import './ProductFilters.css';

const ProductFilters = ({ onFilterChange }) => {
    const handleFilterChange = (e) => {
        onFilterChange(e.target.name, e.target.value);
    };

    return (
        <div className="filters">
            <div className="filter-item">
                <label htmlFor="category">Category</label>
                <select name="category" id="category" onChange={handleFilterChange}>
                    <option value="">All Categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                    {/* Add more categories */}
                </select>
            </div>

            <div className="filter-item">
                <label htmlFor="price">Price</label>
                <select name="price" id="price" onChange={handleFilterChange}>
                    <option value="">All Prices</option>
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                </select>
            </div>

            {/* Add more filters like ratings, brands */}
        </div>
    );
};

export default ProductFilters;
