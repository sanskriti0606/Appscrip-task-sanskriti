import React from "react";
import styles from "./header.module.css";
import Image from 'next/image';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topSection}>
      <div className={styles.logoIcon}>
      <Image 
  src="/image.png" 
  alt="Product" 
  width={500} // Replace with your image's width
  height={300} // Replace with your image's height
  priority // Optional: if the image is critical for the page load
// Set the height of the image
/>      </div>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.icons}>
          <a href="#search" className={styles.icon}>🔍</a>
          <a href="#favorites" className={styles.icon}>❤️</a>
          <a href="#cart" className={styles.icon}>🛒</a>
          <a href="#profile" className={styles.icon}>👤</a>
          <div className={styles.language}>ENG ⌄</div>
        </div>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#stories">Stories</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      <div className={styles.description}>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus 
        </p>
        <p>scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </div>
    </header>
  );
};

export default Header;
