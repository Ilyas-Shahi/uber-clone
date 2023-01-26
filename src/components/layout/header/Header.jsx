import { useState } from 'react';
import CompanyDropdown from './CompanyDropdown';

import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.flex_container}`}>
        <div className={styles.left_menu}>
          <span className={styles.logo}>
            <span className={styles.logo_u}>u</span>ber
          </span>

          <ul>
            <CompanyDropdown />
            <li>Saftey</li>
            <li>Help</li>
          </ul>
        </div>

        <div className={styles.right_menu}></div>
      </div>
    </header>
  );
};

export default Header;
