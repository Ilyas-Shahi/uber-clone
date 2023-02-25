import { useEffect, useRef, useState } from 'react';
import { TbGridDots, TbToolsKitchen2 } from 'react-icons/tb';

import {
  RiBikeLine,
  RiBus2Line,
  RiHome4Line,
  RiSteering2Line,
  RiSuitcaseLine,
} from 'react-icons/ri';
import { AiOutlineCar } from 'react-icons/ai';
import { BiMoney, BiTrain } from 'react-icons/bi';
import { MdOutlineWineBar } from 'react-icons/md';

import styles from './header.module.css';

const Products = () => {
  const [open, setOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const checkClick = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', checkClick);

    return () => {
      document.removeEventListener('mousedown', checkClick);
    };
  }, [open]);
  return (
    <span onClick={() => setOpen(!open)} ref={ref}>
      <TbGridDots />
      Products
      {open && (
        <div
          className={`${styles.company_dropdown} ${styles.products_dropdown}`}
        >
          <ul>
            <li>
              <RiHome4Line /> <span>Home</span>
            </li>
            <li>
              <AiOutlineCar /> <span>Ride</span>
            </li>
            <li>
              <RiSteering2Line /> <span>Drive</span>
            </li>
            <li>
              <TbToolsKitchen2 /> <span>Eat</span>
            </li>
            <li>
              <MdOutlineWineBar /> <span>Merchants</span>
            </li>
            <li>
              <RiBus2Line /> <span>Freight</span>
            </li>
            <li>
              <RiBikeLine /> <span>Bike & scoot</span>
            </li>
            <li>
              <BiTrain /> <span>Transit</span>
            </li>
            <li>
              <RiSuitcaseLine /> <span>Business</span>
            </li>
            <li>
              <BiMoney /> <span>Money</span>
            </li>
          </ul>
        </div>
      )}
    </span>
  );
};
export default Products;
