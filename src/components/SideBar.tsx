import React from 'react';
import styles from './SideBar.module.css';

const filters = [
  'Customizable',
  'Ideal For',
  'Occasion',
  'Work',
  'Fabric',
  'Segment',
  'Suitable For',
  'Raw Materials',
  'Pattern',
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {filters.map((filter, index) => (
        <div key={index} className={styles.filterSection}>
          <div className={styles.filterTitle}>{filter}</div>
          <select className={styles.select}>
            <option>All</option>
          </select>
        </div>
      ))}
    </aside>
  );
}