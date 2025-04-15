import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from'./ImageCarousel.module.css';

const ImageCarousel = ({ images, delay = 3000, imageClass='' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, delay);

    return () => clearInterval(interval);
  }, [images.length, delay]);

  // Navigation functions
  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`${styles.carousel} ${imageClass}`}>
      <div className={styles.carouselInner}>
        {images.map((image, index) => (
          <div 
            key={index}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      
      <button className={`${styles.carouselControl} ${styles.prev}`} onClick={goToPrev}>&#10094;</button>
      <button className={`${styles.carouselControl} ${styles.next}`} onClick={goToNext}>&#10095;</button>
      
      <div className={styles.indicator}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  delay: PropTypes.number
};

export default ImageCarousel;