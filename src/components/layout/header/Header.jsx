import { useEffect, useState } from 'react';
import { VscGlobe } from 'react-icons/vsc';

import CompanyDropdown from './CompanyDropdown';

import Products from './Products';
import styles from './header.module.css';
import LangModal from './LangModal';
import useIsMobile from '../../../useIsMobile';

import MenuIcon from '../../../assets/menu-icon.svg';
import CrossIcon from '../../../assets/cross-icon.svg';

const Header = () => {
  const [showLangModal, setShowLangModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const isMobile = useIsMobile();

  const hideLangModal = () => {
    setShowLangModal(false);
  };

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
  }, [showMobileMenu]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.flex_container}`}>
        <div className={styles.left_menu}>
          <span className={styles.logo}>
            <span className={styles.logo_u}>u</span>ber
          </span>

          {!isMobile && (
            <ul>
              <CompanyDropdown />
              <li>Safety</li>
              <li>Help</li>
            </ul>
          )}
        </div>

        <div className={styles.right_menu}>
          {!isMobile && (
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
          )}

          {!isMobile && <Products />}

          <button>Log in</button>
          <button>Sign up</button>

          {isMobile && (
            <button
              className={styles.menu_btn}
              onClick={() => {
                setShowMobileMenu(!showMobileMenu);
                setShowLangModal(false);
              }}
            >
              <img src={showMobileMenu ? CrossIcon : MenuIcon} alt="" />
            </button>
          )}
        </div>
      </div>

      {showLangModal && <LangModal hideLangModal={hideLangModal} />}

      {showMobileMenu && isMobile && (
        <div className={styles.mobile_menu}>
          <ul>
            <CompanyDropdown />
            <li>Safety</li>
            <li>Help</li>
          </ul>

          <Products />

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
        </div>
      )}
    </header>
  );
};

export default Header;
