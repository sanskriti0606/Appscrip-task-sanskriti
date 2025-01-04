import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topSection}>
      <div className={styles.logoIcon}>
  <img src="./image.png" alt="Logo Icon" />
</div>
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
