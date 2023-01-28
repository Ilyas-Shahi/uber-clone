import { HiArrowRight } from 'react-icons/hi';
import styles from './footer.module.css';

import DriverApp from '../../../assets/Driver-App-logo.png';
import RiderApp from '../../../assets/Rider-App-logo.png';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.apps}>
        <div className="container">
          <h3>There's more to love in the apps</h3>
          <div className={styles.flex}>
            <div className={`${styles.appsCard} ${styles.driverApp}`}>
              <img src={DriverApp} alt="" />
              <span>Download the Driver app</span>
              <HiArrowRight className={styles.icon} />
            </div>
            <div className={`${styles.appsCard} ${styles.riderApp}`}>
              <img src={RiderApp} alt="" />
              <span>Download the Uber app</span>
              <HiArrowRight className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
