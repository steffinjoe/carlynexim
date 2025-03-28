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
          subtitle="Have questions or ready to place an order? Contact us for personalized assistance."
          light
        />
        
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Contact Information</h3>
            
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

          <div className={styles.contactForm}>
            {submitSuccess ? (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>✓</div>
                <h3>Thank you for your enquiry!</h3>
                <p>We'll get back to you within 24 hours.</p>
                <Button onClick={() => setSubmitSuccess(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className={errors.name ? styles.errorInput : ''}
                  />
                  {errors.name && (
                    <span className={styles.errorMessage}>{errors.name.message}</span>
                  )}
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={errors.email ? styles.errorInput : ''}
                  />
                  {errors.email && (
                    <span className={styles.errorMessage}>{errors.email.message}</span>
                  )}
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    {...register('subject', { required: 'Subject is required' })}
                    className={errors.subject ? styles.errorInput : ''}
                  >
                    <option value="">Select a subject</option>
                    <option value="product">Product Inquiry</option>
                    <option value="quote">Request for Quote</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && (
                    <span className={styles.errorMessage}>{errors.subject.message}</span>
                  )}
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: {
                        value: 20,
                        message: 'Message must be at least 20 characters'
                      }
                    })}
                    className={errors.message ? styles.errorInput : ''}
                  ></textarea>
                  {errors.message && (
                    <span className={styles.errorMessage}>{errors.message.message}</span>
                  )}
                </div>
                
                <div className={styles.formActions}>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={styles.submitButton}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;