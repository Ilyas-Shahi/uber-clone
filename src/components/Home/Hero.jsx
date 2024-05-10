import { useState } from 'react';

import { TbAntennaBars5, TbToolsKitchen2 } from 'react-icons/tb';
import { TiLocationArrow } from 'react-icons/ti';
import { AiOutlineCar } from 'react-icons/ai';

import useIsMobile from '../../useIsMobile';
import UnderBtn from '../layout/UnderBtn';

import styles from './hero.module.css';

import bg1 from '../../assets/bg1.jpg';
import bg2 from '../../assets/bg2.png';
import bg3 from '../../assets/bg3.jpg';

const Hero = () => {
  const [activeTab, setActiveTab] = useState(1);

  const isMobile = useIsMobile();

  const toggleTab = (i) => {
    setActiveTab(i);
  };

  const heroBgStyles = {
    backgroundImage: `url(${
      activeTab === 2 ? bg2 : activeTab === 3 ? bg3 : bg1
    })`,
    backgroundColor: 'lightgray',
  };

  return (
    <main style={!isMobile ? heroBgStyles : {}}>
      <div className="container">
        <div className={styles.tabs_container}>
          <div className={styles.tabs_head}>
            <div
              onClick={() => toggleTab(1)}
              className={`${styles.tab} ${activeTab === 1 && styles.active} ${
                styles.drive
              } `}
            >
              <TbAntennaBars5
                style={isMobile ? { width: '26px' } : { width: '30px' }}
              />
              <span>Drive or deliver</span>
            </div>
            <div
              onClick={() => toggleTab(2)}
              className={`${styles.tab} ${styles.eat} ${
                activeTab === 2 && styles.active
              }`}
            >
              <TbToolsKitchen2
                style={isMobile ? { width: '20px' } : { width: '25px' }}
              />
              <span>Eat</span>
            </div>
            <div
              onClick={() => toggleTab(3)}
              className={`${styles.tab} ${activeTab === 3 && styles.active} ${
                styles.ride
              }`}
            >
              <AiOutlineCar
                style={isMobile ? { width: '20px' } : { width: '26px' }}
              />
              <span>Ride</span>
            </div>
          </div>

          <div className={styles.tabs_content}>
            {activeTab === 1 && (
              <div className={styles.drive_content}>
                <h1>Get in the driver's seat and get paid</h1>
                <p>
                  Drive on the platform with the largest network of active
                  riders.
                </p>
                <button
                  className="btn"
                  style={
                    isMobile
                      ? { marginBottom: '24px' }
                      : { marginBottom: '40px' }
                  }
                >
                  Sign up to drive
                </button>
                <UnderBtn>Learn more about driving and delivering</UnderBtn>
              </div>
            )}

            {activeTab === 2 && (
              <div className={styles.eat_content}>
                <h1>Discover delicious eats</h1>
                <p>Order delivery from restaurants you love.</p>
                <div className={!isMobile && styles.btns}>
                  <button
                    className="btn"
                    style={isMobile ? { marginBottom: '24px' } : {}}
                  >
                    Order now
                  </button>
                  <UnderBtn>Own a restaurant? Partner with Uber Eats</UnderBtn>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className={styles.ride_content}>
                <h1>Request a ride now</h1>
                <div className={styles.inputs}>
                  <div className={styles.pickup}>
                    <input type="text" placeholder="Enter pickup location" />
                    <TiLocationArrow className={styles.locationArrow} />
                  </div>
                  <div className={styles.destination}>
                    <input type="text" placeholder="Enter destination" />
                  </div>
                  <div className={styles.toFrom}></div>
                </div>

                <div className={styles.buttons}>
                  <button className="btn">Request now</button>
                  <button
                    className="btn btn-outline"
                    style={{ marginLeft: '20px' }}
                  >
                    Schedule for later
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {isMobile && (
          <img
            src={activeTab === 2 ? bg2 : activeTab === 3 ? bg3 : bg1}
            alt=""
            style={{ marginBottom: '-10px', width: '100%' }}
          />
        )}
      </div>
    </main>
  );
};
export default Hero;
