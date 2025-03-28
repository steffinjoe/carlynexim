import React from 'react';
import { products } from '../../constants/products';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import Button from '../common/Button';
import styles from './Products.module.css';

const Products = () => {
  return (
    <section id="products" className="section section-light">
      <div className="container">
        <SectionTitle 
          title="Our Premium Products"
          subtitle="Exporting quality agricultural products with global standards"
        />
        
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <Card key={product.id} className={styles.productCard}>
              <div className={styles.imageContainer}>
                <img 
                  src={product.image} 
                  alt={product.title}
                  loading="lazy"
                  className={styles.productImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <div className={styles.varieties}>
                  <h4>Available Varieties:</h4>
                  <ul>
                    {product.varieties.slice(0, 3).map((variety, index) => (
                      <li key={index}>{variety}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.cta}>
                  <Button variant="outline" size="small">
                    View Details
                  </Button>
                  <Button size="small">
                    Request Quote
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;