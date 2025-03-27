import React, { useState, useEffect } from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../footer/Footer';

function Gallery() {
  const initialImages = ['/images/gallery/gallery2.jpg', '/images/gallery/gallery7.jpg', '/images/gallery/gallery4.jpg', '/images/gallery/gallery6.jpg', '/images/2 (1).jpg', '/images/3 (1).jpg'];
  const [images, setImages] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      moveImages();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const moveImages = () => {
    setIsAnimating(true); // Start animation
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setImages((prevImages) => {
        const shuffledImages = [...prevImages];
        const temp1 = shuffledImages[0];
        const temp2 = shuffledImages[1];
        shuffledImages[0] = shuffledImages[2];
        shuffledImages[1] = shuffledImages[3];
        shuffledImages[2] = shuffledImages[4];
        shuffledImages[3] = shuffledImages[5];
        shuffledImages[4] = temp1;
        shuffledImages[5] = temp2;
        return shuffledImages;
      });
      setIsAnimating(false); // End animation
    }, 1000); // Animation duration
  };

  return (
    <div className='h-screen w-screen text-white'>
      <Navbar />
      <div className='m-4'>
        <h1 className='text-6xl font-clashDisplay text-center'>Gallery</h1>
        <div className="grid grid-cols-3 gap-4 my-4 mx-auto w-[70%] h-[30%] overflow-hidden ">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative ${index % 3 === 0 ? 'col-span-2 h-60' : 'h-30'}`}
              style={{
                transition: 'transform 1s', // Smooth transition animation
                transform: isAnimating ? `translateX(${(index - currentIndex) * 100}%)` : 'none', // Move images based on currentIndex
              }}
            >
              {/* Large Image */}
              <img
                src={image}
                alt={image}
                className='absolute inset-0 w-full h-full object-cover'
                style={{ opacity: index === 0 ? 1 : index === 4 || index === 5 ? 0 : 1 }} // Show large image only for the first image, hide fifth and sixth initially
              />
              {/* Small Images
              <img
                src={image}
                alt={image}
                className='w-full h-full object-cover'
                style={{ opacity: index === 0 ? 0 : 1 }} // Hide small images initially
              /> */}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
