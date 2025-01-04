import React from "react";
import "./globals.css"; // Global styles
import Footer from "../components/Footer";
import styles from "./layout.module.css";

interface LayoutProps {
  children: React.ReactNode; // Explicitly define the type for children
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className={styles.pageContainer}>
          <div className={styles.content}>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
