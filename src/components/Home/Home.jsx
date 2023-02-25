import Header from '../layout/header/Header';
import Hero from './Hero';
import SafetySection from './SafetySection';
import Footer from '../layout/footer/Footer';

import styles from './home.module.css';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />

      <div className={styles.business}>
        <div className="container">
          <h3>Uber for Business</h3>
          <p>Transform the way your company move and feeds its people.</p>
          <button className="btn">See how</button>
        </div>
      </div>

      <SafetySection />

      <Footer />
    </>
  );
};
export default Home;
