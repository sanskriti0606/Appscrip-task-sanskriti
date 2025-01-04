import React from "react";
import CustomBar from "../components/CustomBar";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import Sidebar from "../components/SideBar";
import ProductGrid from "../components/ProductGrid";
import styles from "./page.module.css";

const App = () => {
  return (
    <div className={styles.pageContainer}>
      <CustomBar />
      <Header />
      <Navbar />
      <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.productGrid}>
        <ProductGrid />
      </div>
    </div>
    </div>
  );
};

export default App;
