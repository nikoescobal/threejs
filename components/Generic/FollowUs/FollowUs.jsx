/* eslint-disable no-unused-vars */
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TikTokIcon from '../../../public/logos/tiktok.svg';
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
          <a href="https://twitter.com/LegacyNetworkio" target='_blank' rel="noreferrer">
            <div className={`${styles['icon-wrapper']}`}>
              <TwitterIcon />
            </div>
          </a>
          <a href="https://www.tiktok.com/@legacynetwork.io" target='_blank' rel="noreferrer">
            <div className={`${styles['icon-wrapper']} ${styles['tiktok']}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2859 3333" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"><path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"/></svg>
            </div>
          </a>
          <a href="https://www.instagram.com/legacynetwork.io/" target='_blank' rel="noreferrer">
            <div className={`${styles['icon-wrapper']}`}>
              <InstagramIcon />
            </div>
          </a>
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
    </section>
  );
}

export default FollowUs;
