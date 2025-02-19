import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Help Section */}
                <div className="footer-section">
                    <h4>Help</h4>
                    <ul>
                        <li><a href="#customer-service">Customer Service</a></li>
                        <li><a href="#faqs">FAQs</a></li>
                        <li><a href="#contact-us">Contact Us</a></li>
                        <li><a href="#track-order">Track Order</a></li>
                        <li><a href="#returns">Returns</a></li>
                        <li><a href="#shipping">Shipping</a></li>
                    </ul>
                </div>

                {/* About Section */}
                <div className="footer-section">
                    <h4>About</h4>
                    <ul>
                        <li><a href="#about">About Calvin Klein</a></li>
                        <li><a href="#careers">Careers</a></li>
                        <li><a href="#privacy-commitment">Privacy Commitment</a></li>
                        <li><a href="#sustainability">Sustainability + Inclusivity</a></li>
                    </ul>
                </div>

                {/* Contact Us Section */}
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>For inquiries, reach us at:</p>
                    <ul>
                        <li>Email: raishoalam92@gmail.com</li>
                        <li>Phone: 7703988759</li>
                        <li>Address: , Surathkal, Mangaluru, Karnataka 575014</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 ExelonShoppy. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
