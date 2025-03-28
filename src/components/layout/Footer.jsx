import React from 'react';
import { contactInfo, footerLinks } from '../../constants/footerData';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerAbout}>
            <h3 className={styles.footerLogo}>Carlyn<span>Exim</span></h3>
            <p className={styles.footerDescription}>
              Your trusted partner for premium quality agricultural exports. 
              We connect farmers to global markets with integrity and excellence.
            </p>
            <div className={styles.socialLinks}>
              {contactInfo.social.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index} className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>{column.title}</h4>
              <ul className={styles.columnLinks}>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.url} className={styles.columnLink}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Carlyn Exim. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;