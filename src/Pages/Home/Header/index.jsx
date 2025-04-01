import React from "react";
import styles from "./style.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <p className={styles.p1}>Minimal Interior Design</p>
          <p className={styles.p2}>
            We minimize your waste in every step of the process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
