import CompanyDropdown from './CompanyDropdown';

import { VscGlobe } from 'react-icons/vsc';

import Products from './Products';
import styles from './header.module.css';
import LangModal from './LangModal';
import { useState } from 'react';

const Header = () => {
  const [showLangModal, setShowLangModal] = useState(false);

  const hideLangModal = () => {
    setShowLangModal(false);
  };

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

        <div className={styles.right_menu}>
          <span onClick={() => setShowLangModal(true)}>
            <VscGlobe
              style={{
                transform: 'rotate(313deg)',
                fontSize: '16px',
                fontWeight: 'bolder',
                marginBottom: '-3px',
              }}
            />
            EN
          </span>

          <Products />

          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </div>

      {showLangModal && <LangModal hideLangModal={hideLangModal} />}
    </header>
  );
};

export default Header;
