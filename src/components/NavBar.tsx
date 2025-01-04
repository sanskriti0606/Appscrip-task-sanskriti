import React from 'react';
import styles from './NavBar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Filter Section */}
      <div className={styles.filter}>
        <button className={styles.button}>HIDE FILTER</button>
      </div>

      {/* Sorting Section */}
      <div className={styles.sort}>
        <select className={styles.select}>
          <option>Recommended</option>
          <option>Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
    </nav>
  );
}
