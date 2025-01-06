// Navbar.tsx

import React from 'react';
import styles from './NavBar.module.css';

interface NavbarProps {
  toggleSidebar: () => void;
  isSidebarVisible: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, isSidebarVisible }) => {
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
    </nav>
  );
};

export default Navbar;
