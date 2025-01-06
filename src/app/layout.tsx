"use client"; // This makes this file a Client Component
import React, { useState } from "react";
import "./globals.css"; // Global styles
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/NavBar";
import Sidebar from "../components/SideBar";
import CustomBar from "../components/CustomBar";
import styles from "./layout.module.css";

interface LayoutProps {
  children: React.ReactNode; // Explicitly define the type for children
}

export default function RootLayout({ children }: LayoutProps) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  return (
    <html lang="en">
      <body>
        <div className={styles.pageContainer}>
          <CustomBar />
          <Header />
          <Navbar toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />
          <div className={styles.content}>
            <div className={styles.sidebar}>
              {isSidebarVisible && <Sidebar />}
            </div>
            <div className={styles.mainContent}>{children}</div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
