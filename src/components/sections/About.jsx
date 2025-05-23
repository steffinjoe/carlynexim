import React from 'react';
import SectionTitle from '../common/SectionTitle';
import styles from './About.module.css';
import { stats } from '../../constants/stats';

const About = () => {

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <SectionTitle 
              title="About Carlyn Exim"
            />
            <div className={styles.textContent}>
              <p>
                Founded in 2010, Carlyn Exim has grown from a small regional exporter to a trusted international supplier of premium agricultural products. Our focus on quality, reliability, and sustainable sourcing has earned us long-term partnerships with clients across four continents.
              </p>
              <p>
                We work directly with farmers through our network of farms, implementing strict quality control measures at every stage from harvest to packaging. Our state-of-the-art processing facilities ensure products meet international food safety standards.
              </p>
            </div>
            <div className={styles.stats}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className={styles.aboutImage}>
            <img 
              src={aboutImage} 
              alt="Carlyn Exim team inspecting products"
              loading="lazy"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;