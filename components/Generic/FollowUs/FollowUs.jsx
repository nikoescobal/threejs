/* eslint-disable no-unused-vars */
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
          <a href="https://twitter.com/LegacyNetworkio" target='_blank' rel="noreferrer">
            <div className={`${styles['icon-wrapper']}`}>
              <TwitterIcon />
            </div>
          </a>
          <a href="https://www.instagram.com/legacynetwork.io/" target='_blank' rel="noreferrer">
            <div className={`${styles['icon-wrapper']}`}>
              <InstagramIcon />
            </div>
          </a>
        </div>
        <div className={`${styles.bottom}`}>
          <div>
            <a href="https://www.reddit.com/r/legacynetwork/" rel='noreferrer' target="_blank">
              <div className={`${styles['icon-wrapper']}`}>
                <RedditIcon />
              </div>
            </a>
            <a href="https://t.me/+cIdNDFAbnN5iZWRk" rel='noreferrer' target="_blank">
              <div className={`${styles['icon-wrapper']}`}>
                <TelegramIcon />
              </div>
            </a>
            <a href="https://www.linkedin.com/company/legacy-network-ag/mycompany/" rel='noreferrer' target="_blank">
              <div className={`${styles['icon-wrapper']}`}>
                <LinkedInIcon />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FollowUs;
