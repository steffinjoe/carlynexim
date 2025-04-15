import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { contactInfo } from '../../constants/contactInfo';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import styles from './Contact.module.css';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <SectionTitle 
          title="Get In Touch"
          subtitle=""
          light
        />
        
        <div className={styles.contactGrid}>
        <h3 className={styles.infoTitle}>Contact Information</h3>
          <div className={styles.contactInfo}>
            
            {contactInfo.items.map((item, index) => (
              <div key={index} className={styles.infoItem}>
                <div className={styles.infoIcon}>{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  {Array.isArray(item.content) ? (
                    item.content.map((content, i) => (
                      <p key={i}>{content}</p>
                    ))
                  ) : (
                    <p>{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;