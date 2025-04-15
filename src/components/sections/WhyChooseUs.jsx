import React from 'react';
import { features } from '../../constants/features';
import SectionTitle from '../common/SectionTitle';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  return (
    <section id="why-us" className={`section ${styles.whyChooseUs}`}>
      <div className="container">
        <SectionTitle 
          title="Why Choose Us"
          subtitle=""
        />
        
        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;