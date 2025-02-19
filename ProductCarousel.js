import React from 'react';
import Slider from 'react-slick';
import './slide.css';

// Importing slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCarousel = ({ products }) => {
    // Array of placeholder images
    const placeholderImages = [
       "https://media1.calvinklein.com/images/20250215/HP/3_2x.webp?text=Image+1",
        "https://media1.calvinklein.com/images/20250215/HP/4_2x.webp?text=Image+2",
        "https://media1.calvinklein.com/images/20250215/HP/4_2x.webp?text=Image+3",
        "https://media1.calvinklein.com/images/20250215/HP/4_2x.webp?text=Image+4",
        "https://media1.calvinklein.com/images/20250215/HP/3_2x.webp?text=Image+5"
    ];

    // Function to get a random placeholder image
    const getRandomPlaceholderImage = () => {
        const randomIndex = Math.floor(Math.random() * placeholderImages.length);
        return placeholderImages[randomIndex];
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,         // Show 1 slide at a time
        slidesToScroll: 1,
        autoplay: true,          // Enable automatic sliding
        autoplaySpeed: 2000,     // Set autoplay speed (2 seconds per slide)
        pauseOnHover: true,      // Pause on hover
        responsive: [
            {
                breakpoint: 1024, // For tablets and small screens
                settings: {
                    slidesToShow: 1,   // Show 1 slide on tablets as well
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,  // For mobile screens
                settings: {
                    slidesToShow: 1,  // Show 1 slide on mobile screens as well
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,  // For very small screens (portrait mobile)
                settings: {
                    slidesToShow: 1,  // Show 1 slide on very small screens
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {products.map((product) => (
                <div key={product.id} className="carousel-slide">
                    <img
                        src={product.image || getRandomPlaceholderImage()}  // Use random placeholder if no image
                        alt={product.name}
                        className="carousel-image"
                    />
                    <h4>{product.name}</h4>
                    <p>{product.price}</p>
                </div>
            ))}
        </Slider>
    );
};

export default ProductCarousel;
