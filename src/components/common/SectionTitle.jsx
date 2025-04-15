import React from 'react';
import styles from './SectionTitle.module.css';

const SectionTitle = ({ title, subtitle, align = 'center', light = false }) => {
  return (
    <div className={`${styles.sectionTitle} ${styles[align]} ${light ? styles.light : ''}`}>
      <h2>{title}</h2>
      {subtitle && <p className='left'>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;