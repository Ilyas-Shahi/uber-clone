import { useEffect, useRef, useState } from 'react';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';

import styles from './header.module.css';

const Company = () => {
  const [open, setOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const checkClick = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        console.log(e.target);
      }
    };

    document.addEventListener('mousedown', checkClick);

    return () => {
      document.removeEventListener('mousedown', checkClick);
    };
  }, [open]);

  console.log(open);

  return (
    <li ref={ref}>
      <div className={styles.company_li} onClick={() => setOpen(!open)}>
        Company
        {open ? (
          <GoChevronUp />
        ) : (
          <GoChevronDown style={{ marginBottom: '-5px' }} />
        )}
      </div>

      {open && (
        <div className={styles.company_dropdown}>
          <ul>
            <li>About us</li>
            <li>Out offerings</li>
            <li>How Uber works</li>
            <li>Global citizenship</li>
            <li>Newsroom</li>
            <li>Investor relations</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
      )}
    </li>
  );
};

export default Company;
