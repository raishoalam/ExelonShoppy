import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer'
import './cart.css'

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Retrieve cart data from localStorage on page load
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
    }, []);

    const handleRemoveItem = (id) => {
        // Remove item from cart and update localStorage
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleQuantityChange = (id, quantity) => {
        // Update quantity of the item in the cart
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleCheckout = () => {
        // This is a simple checkout placeholder; implement actual checkout logic here.
        alert("Proceeding to Checkout");
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <div className="cart-item-details">
                                <h4>{item.name}</h4>
                                <p><strong>Price:</strong> ${item.price}</p>
                                <p><strong>Brand:</strong> {item.brand}</p>
                                <p><strong>Rating:</strong> {item.rating} ⭐</p>

                                {/* Quantity Selector */}
                                <div className="quantity">
                                    <label>Quantity: </label>
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                    />
                                </div>
                            </div>
                            <button className="remove-item" onClick={() => handleRemoveItem(item.id)}>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {cartItems.length > 0 && (
                <div className="cart-summary">
                    <h3>Cart Summary</h3>
                    <p>
                        <strong>Total: </strong>$
                        {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                    </p>
                    <button className="checkout-btn" onClick={handleCheckout}>
                        Proceed to Checkout
                    </button>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Cart;
