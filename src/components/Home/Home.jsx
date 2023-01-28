import Footer from '../layout/footer/Footer';
import Header from '../layout/header/Header';
import Hero from './Hero';

import styles from './home.module.css';
import SafteySection from './SafteySection';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />

      <div className={styles.business}>
        <div className="container">
          <h3>Uber for Business</h3>
          <p>Transfrom the way your company move and feeds its people.</p>
          <button className="btn">See how</button>
        </div>
      </div>

      <SafteySection />

      <Footer />
    </>
  );
};
export default Home;
