import { HiArrowRight, HiLocationMarker } from 'react-icons/hi';
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { VscGlobe } from 'react-icons/vsc';

import styles from './footer.module.css';

import DriverApp from '../../../assets/Driver-App-logo.png';
import RiderApp from '../../../assets/Rider-App-logo.png';
import AppleStore from '../../../assets/app-store-apple-f1f919205b.svg';
import PlayStore from '../../../assets/app-store-google-4d63c31a3e.svg';

const Footer = () => {
  return (
    <>
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

      <div className={styles.signUp}>
        <div className="container">
          <div>
            <h3>Sign up to drive</h3>
            <HiArrowRight className={styles.icon} />
          </div>
          <div>
            <h3>Sign up to ride</h3>
            <HiArrowRight className={styles.icon} />
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className="container">
          <span className={styles.logo}>
            <span className={styles.logo_u}>u</span>ber
          </span>
          <h4>Visit Help Center</h4>

          <div className={styles.menus}>
            <div className={styles.menu}>
              <h4>Company</h4>
              <ul>
                <li>About us</li>
                <li>Out offerings</li>
                <li>Newsroom</li>
                <li>Investors</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>AI</li>
                <li>Gif cards</li>
              </ul>
            </div>
            <div className={styles.menu}>
              <h4>Products</h4>
              <ul>
                <li>Ride</li>
                <li>Drive</li>
                <li>Eat</li>
                <li>Uber for Business</li>
                <li>Uber Freight</li>
              </ul>
            </div>
            <div className={styles.menu}>
              <h4>Global citizenship</h4>
              <ul>
                <li>Safety</li>
                <li>Diversity and Inclusion</li>
              </ul>
            </div>
            <div className={styles.menu}>
              <h4>Travel</h4>
              <ul>
                <li>Airports</li>
                <li>Cities</li>
              </ul>
            </div>
          </div>

          <div className={styles.socialInfo}>
            <div className={styles.socialIcons}>
              <i>
                <AiFillFacebook />
              </i>
              <i>
                <AiOutlineTwitter />
              </i>
              <i>
                <AiFillYoutube />
              </i>
              <i>
                <AiFillLinkedin />
              </i>
              <i>
                <AiOutlineInstagram />
              </i>
            </div>

            <div>
              <span>
                <VscGlobe
                  style={{
                    transform: 'rotate(313deg)',
                    fontSize: '16px',
                    fontWeight: 'bolder',
                    marginBottom: '-3px',
                  }}
                />
                &nbsp; English
              </span>
              <span>
                <HiLocationMarker />
                &nbsp; San Francisco Bay Area
              </span>
            </div>
          </div>

          <div className={styles.appStores}>
            <img src={AppleStore} alt="" />
            <img src={PlayStore} alt="" />
          </div>

          <div className={styles.copyright}>
            <p>© 2023 Uber Technologies Inc.</p>
            <ul>
              <li>Privacy</li>
              <li>Accessibility</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
