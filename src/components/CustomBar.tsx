import React from "react";
import styles from "./CustomBar.module.css";

const CustomBar = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>Lorem ipsum dolor</div>
      <div className={styles.barContent}>Lorem ipsum dolor</div>
      <div className={styles.barContent}>Lorem ipsum dolor</div>
    </div>
  );
};

export default CustomBar;
