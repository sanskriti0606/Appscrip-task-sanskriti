// App.tsx

'use client';

import React, { useState } from "react";
import CustomBar from "../components/CustomBar";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import Sidebar from "../components/SideBar";
import ProductGrid from "../components/ProductGrid";
import styles from "./page.module.css";

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [category, setCategory] = useState('recommended');

  const toggleSidebar = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  const handleCategorySelect = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };
  

  return (
    <div className={styles.pageContainer}>
      <CustomBar />
      <Header />
      <Navbar toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} onSelectCategory={handleCategorySelect} />
      <div className={styles.container}>
        {/* Always show Sidebar on desktop, conditionally show on mobile */}
        {isSidebarVisible && (
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
        )}
        <div className={styles.productGrid}>
          <ProductGrid category={category} /> {/* Pass the category prop */}
        </div>
      </div>
    </div>
  );
};

export default App;
