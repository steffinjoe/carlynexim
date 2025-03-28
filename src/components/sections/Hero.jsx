import React from 'react';
import Button from '../common/Button';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Premium <span>Agricultural</span> Exports
          </h1>
          <p className={styles.heroSubtitle}>
            Direct from farm to global markets with uncompromising quality and reliability
          </p>
          <div className={styles.heroButtons}>
            <Button size="large">Explore Products</Button>
            <Button variant="outline" size="large">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;