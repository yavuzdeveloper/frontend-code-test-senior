import React from "react";

import styles from "./Header.module.css";
import Cart from "../cart/Cart";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.menuWrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.menuIcon}
          viewBox="0 0 24 24"
          role="img"
          aria-label="Menu"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        <span>Menu</span>
      </div>

      <img
        src="https://static.octopuscdn.com/logos/logo.svg"
        alt="Octopus Energy Logo"
        className={styles.logo}
      />
      <div className={styles.cartWrapper}>
        <Cart />
      </div>
    </header>
  );
};

export default Header;
