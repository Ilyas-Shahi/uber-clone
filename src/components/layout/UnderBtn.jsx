import styles from './underbtn.module.css';

const UnderBtn = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};
export default UnderBtn;
