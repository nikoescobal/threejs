/* eslint-disable no-unused-vars */
import Chests from '../../public/backgrounds/chests.png';
import useStore from '../../store/store';
import Link from 'next/link';
import styles from './footer.module.scss';
import Logo from '../../public/logo-cropped.png';
import Image from 'next/image';
import { useState } from 'react';
import SimpleDialog from '../Generic/SimpleDialog/SimpleDialog';
import { useEffect } from 'react';

function Giveaway() {
  const date = new Date();
  const { isDarkMode } = useStore((state) => state);
  const [openDialog, setOpenDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <div
      className={`${styles.giveaway} ${!isDarkMode ? `${styles.light}` : ''}`}
      // style={{
      //   background: 'url("/backgrounds/footer-bg.png"), rgb(2, 5, 14)',
      //   backgroundSize: 'cover',
      // }}
    >
      <div className={styles['img-wrapper']}>
        <img src={Chests.src} alt="Chests" />
      </div>
      {/* <img src="/backgrounds/waves-blue-bl.svg" alt="" /> */}
    </div>
  );
}

export default Giveaway;
