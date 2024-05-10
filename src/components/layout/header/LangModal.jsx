import { IoCloseSharp } from 'react-icons/io5';

import styles from './header.module.css';

const LangModal = ({ hideLangModal }) => {
  return (
    <div className={styles.modal}>
      <i>
        <IoCloseSharp onClick={hideLangModal} />
      </i>

      <h4>Select your preferred language</h4>

      <button>English</button>
      <button>Italiano</button>
    </div>
  );
};
export default LangModal;
