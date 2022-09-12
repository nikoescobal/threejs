/* eslint-disable no-unused-vars */
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from './followus.module.scss';
import generics from '../../../styles/generics.module.scss';
import Link from 'next/link';
import useStore from '../../../store/store';

function FollowUs() {
  const { isDarkMode } = useStore((state) => state);

  return (
    <section className={`${styles['follow-us']} ${isDarkMode ? '' : `${styles.light}`} ${generics['spacing-x']}`}>
      {/* <img src="/assets/parallax/circle.png" className="floating-shape" alt="" />
      <img src="/assets/parallax/square.png" className="floating-shape" alt="" />
      <img src="/assets/parallax/triangle.png" className="floating-shape" alt="" />
      <img src="/assets/parallax/cross.png" className="floating-shape" alt="" /> */}
      <h3>Follow Us</h3>
      <div className={`${styles['main-icon-wrapper']}`}>
        <div className={`${styles.top}`}>
          <div className={`${styles['icon-wrapper']}`}>
            <Link href="/">
              <TwitterIcon />
            </Link>
          </div>
          <div className={`${styles['icon-wrapper']}`}>
            <Link href="/">
              <TwitterIcon />
            </Link>
          </div>
        </div>
        <div className={`${styles.bottom}`}>
          <div>
            <div className={`${styles['icon-wrapper']}`}>
              <Link href="/">
                <TwitterIcon />
              </Link>
            </div>
            <div className={`${styles['icon-wrapper']}`}>
              <Link href="/">
                <TwitterIcon />
              </Link>
            </div>
          </div>
          <div>
            <div className={`${styles['icon-wrapper']}`}>
              <Link href="/">
                <TwitterIcon />
              </Link>
            </div>
            <div className={`${styles['icon-wrapper']}`}>
              <Link href="/">
                <TwitterIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FollowUs;
