// Navbar.tsx

import React from 'react';
import styles from './NavBar.module.css';

interface NavbarProps {
  toggleSidebar: () => void;
  isSidebarVisible: boolean;
  onSelectCategory: (category: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, isSidebarVisible, onSelectCategory }) => {
  return (
    <nav className={styles.navbar}>
      {/* Filter Section */}
      <div className={styles.filter}>
        <button
          className={styles.button}
          onClick={toggleSidebar}
        >
          {isSidebarVisible ? "Hide Filter" : "Show Filter"}
        </button>
      </div>

      {/* Sorting Section */}
      <div className={styles.sort}>
      <select className={styles.select} onChange={(e) => onSelectCategory(e.target.value)}>
  <option value="recommended">Recommended</option>
  <option value="newest">Newest</option>
  <option value="priceLowToHigh">Price: Low to High</option>
  <option value="priceHighToLow">Price: High to Low</option>
</select>

      </div>
    </nav>
  );
};

export default Navbar;
