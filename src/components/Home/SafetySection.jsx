import { RiGroupLine, RiHome4Line } from 'react-icons/ri';
import { MdOutlineArticle } from 'react-icons/md';

import styles from './home.module.css';

import SafetyImg from '../../assets/Safety_Home_Img2x.png';
import CitiesImg from '../../assets/Cities_Home_Img2x.png';
import UnderBtn from '../layout/UnderBtn';

const SafetySection = () => {
  return (
    <div className={styles.safety}>
      <div className="container">
        <h3>Focused on safety, wherever you go</h3>
        <div className={styles.flex}>
          <div>
            <img src={SafetyImg} alt="" />
            <h4>Our commitment to your safety</h4>
            <p>
              With every safety feature and every standard in our Community
              Guidelines, we're committed to helping to create a safe
              environment for our users.
            </p>
            <div className={styles.flex}>
              <UnderBtn>Read about our Community Guidelines</UnderBtn>
              <UnderBtn>See all safety features</UnderBtn>
            </div>
          </div>
          <div>
            <img src={CitiesImg} alt="" />
            <h4>Setting 10,000+ cities in motion</h4>
            <p>
              The app is available in thousands of cities worldwide, so you can
              request a ride even when you’re far from home.
            </p>
            <UnderBtn>View all cities</UnderBtn>
          </div>
        </div>

        <div className={styles.grid_3}>
          <div>
            <RiGroupLine className={styles.icon} />
            <h4>About us</h4>
            <p>
              Find out how we started, what drives us, and how we’re
              re-imagining how the world moves.
            </p>
            <UnderBtn>Learn more about Uber</UnderBtn>
          </div>
          <div>
            <MdOutlineArticle className={styles.icon} />
            <h4>Newsroom</h4>
            <p>
              See announcements about our latest releases, initiatives, and
              partnerships.
            </p>
            <UnderBtn>Go to Newsroom</UnderBtn>
          </div>
          <div>
            <RiHome4Line className={styles.icon} />
            <h4>Global citizenship</h4>
            <p>
              Read about our commitment to making a positive impact in the
              cities we serve.
            </p>
            <UnderBtn>See our partnerships</UnderBtn>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SafetySection;
