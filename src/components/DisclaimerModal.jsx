import { IoCloseSharp } from 'react-icons/io5';

import styles from './DisclaimerModal.module.css';

const DisclaimerModal = ({ setDisclaimerModalShow }) => {
  const closeModal = () => {
    setDisclaimerModalShow(false);
  };

  return (
    <div className={styles.modal} onClick={closeModal}>
      <div className={styles.container}>
        <i>
          <IoCloseSharp onClick={closeModal} />
        </i>

        <h4>Disclaimer:</h4>
        <p>
          This site is not associated with Uber. It is a clone built as a
          practice project.
        </p>

        <p>
          This site is static and will not ask for any information. Please get
          in contact before reporting it.
        </p>

        <a href="https://github.com/Ilyas-Shahi/uber-clone">
          Learn More about it.
        </a>
      </div>
    </div>
  );
};
export default DisclaimerModal;
