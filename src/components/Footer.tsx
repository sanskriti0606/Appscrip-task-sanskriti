import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <h4>BE THE FIRST TO KNOW</h4>
        <p>Sign up for updates from metta muse.</p>
        <form className={styles.subscribeForm}>
          <input type="email" placeholder="Enter your e-mail..." />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>
      <div className={styles.section}>
        <h4>CONTACT US</h4>
        <p>+44 221 133 6360</p>
        <p>customercare@mettamuse.com</p>
        <h4>CURRENCY</h4>
        <p>USD</p>
        <small>Transactions will be completed in Euros, and a currency reference is available on hover.</small>
      </div>
      <div className={styles.section}>
        <h4>QUICK LINKS</h4>
        <div className={styles.quickLinks}> {/* Added class here */}
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className={styles.section}>
        <h4>FOLLOW US</h4>
        <p>Social Media Links</p>
        <h4>metta muse ACCEPTS</h4>
        <p>Payment Icons</p>
      </div>
      <p className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
