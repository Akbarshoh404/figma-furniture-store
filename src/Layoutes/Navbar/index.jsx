import React, { useState } from "react";
import styles from "./style.module.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <p>Brainwave.io</p>
          </div>

          <div className={styles.hamburger} onClick={toggleDrawer}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={styles.desktopMenu}>
            <p>Demos</p>
            <p>Pages</p>
            <p>Support</p>
            <p>Contact</p>
          </div>

          <div className={styles.cart}>
            <span className={styles.cartIcon}>🛒</span>
          </div>
        </div>
      </nav>

      {/* Drawer */}
      <div className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
        <div className={styles.drawerContent}>
          <p onClick={toggleDrawer}>Demos</p>
          <p onClick={toggleDrawer}>Pages</p>
          <p onClick={toggleDrawer}>Support</p>
          <p onClick={toggleDrawer}>Contact</p>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className={styles.overlay} onClick={toggleDrawer}></div>}
    </>
  );
};

export default Navbar;
