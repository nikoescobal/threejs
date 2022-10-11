/* eslint-disable no-unused-vars */
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import TikTokIcon from '../../public/logos/tiktok.svg';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RedditIcon from '@mui/icons-material/Reddit';
import useStore from '../../store/store';
import Link from 'next/link';
import styles from './footer.module.scss';
import Logo from '../../public/logo-cropped.png';
import LogoContainer from '../../public/footer/logo-container.svg';
import RightContainer from '../../public/footer/rights-container.svg';
import Image from 'next/image';
import { LinkedIn } from '@mui/icons-material';
import { useState } from 'react';
import SimpleDialog from '../Generic/SimpleDialog/SimpleDialog';
import { useEffect } from 'react';

function Footer() {
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
    <footer
      className={`${styles.footer} ${!isDarkMode ? `${styles.light}` : ''}`}
      // style={{
      //   background: 'url("/backgrounds/footer-bg.png"), rgb(2, 5, 14)',
      //   backgroundSize: 'cover',
      // }}
    >
      {/* <img src="/backgrounds/waves-blue-bl.svg" alt="" /> */}
      
      <section>
        <div className={`${styles.footer__main}`}>
        <SimpleDialog
          selectedValue={selectedValue}
          open={openDialog}
          onClose={() => handleDialogClose()}
          title="Choose language"
        >
          <div>
            <a href="/pdf/WP-Eng.pdf" onClick={handleDialogClose} target="_blank" className={`${styles.footer__column__item} button-blue`}>
              English
            </a>
            <a href="/pdf/WP-Ger.pdf" onClick={handleDialogClose} target="_blank" className={`${styles.footer__column__item} button-blue`}>
              German
            </a>
          </div>
        </SimpleDialog>
          <div className={`${styles.footer__column} ${styles.left}`}>
            <div className={`${styles.footer__column__items__wrapper}`}>
              <Link href="/" className={`${styles.footer__column__item}`}>
                Home
              </Link>
              <Link href="/app" className={`${styles.footer__column__item}`}>
                App
              </Link>
              <Link href="/token" className={`${styles.footer__column__item}`}>
                Token
              </Link>
              <Link href="/personal-development" className={`${styles.footer__column__item}`}>
                Personal Development
              </Link>
              <Link href="/about-us" className={`${styles.footer__column__item}`}>
                About Us
              </Link>
            </div>
          </div>
          <div className={`${styles.footer__column} ${styles.middle}`}>
            <div className={`${styles.footer__column__items__wrapper}`}>
              <a href="/pdf/audit_report.pdf" target="_blank" className={`${styles.footer__column__item}`}>
                Audit Report
              </a>
              <button type="button" onClick={handleDialogOpen}>
                Whitepaper
                
              </button>
              {/* <a href="/pdf/WP-Eng.pdf" target="_blank" className={`${styles.footer__column__item}`}>
                Whitepaper
              </a> */}
              <Link href="/" className={`${styles.footer__column__item}`}>
                Policies
              </Link>
            </div>
          </div>
          <div className={`${styles.footer__column} ${styles.right}`}>
            <div className={`${styles.items__wrapper}`}>
              <a href='mailto:hello@legacynetwork.io' className={`${styles.footer__column__ite}`}>
                hello@legacynetwork.io
              </a>
              <span className={`${styles.footer__column__item}`}>
                LEGACY Network AG
              </span>
              <span href="/" className={`${styles.footer__column__item}`}>
                Äulestr. 74
              </span>
              <span href="/" className={`${styles.footer__column__item}`}>
                9490 Vaduz
              </span>
              <span href="/" className={`${styles.footer__column__item}`}>
                Liechtenstein
              </span>
              <span href="/" className={`${styles.footer__column__item}`}>
                FL-0002.683.628-1
              </span>
            </div>
          </div>
        </div>
        <div className={`${styles.footer__column}`}>
          <img src="logo-2.png" className={`${styles.footer__column__logo}`} alt="" />
        </div>
      </section>
      <div className={styles['logo-wrapper']}>
        <div>
          <svg width="267" height="227" className={styles.shape} viewBox="0 0 267 227" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M202 101.654C187.6 6.8543 235 0.15457 267 0.154297H0V226.654C0.4 170.654 59.5 165.987 89 170.654C188.6 187.454 205.833 131.654 202 101.654Z" fill="#D9D9D9"/>
          </svg>
          <img src={Logo.src} className={styles.logo} alt="" />
          <div>

          </div>
        
        </div>
      </div>
      <div className={styles['socials-wrapper']}>
        <a href="https://t.me/+cIdNDFAbnN5iZWRk" rel='noreferrer' target="_blank">
          <TelegramIcon />
        </a>
        <a href="https://www.instagram.com/legacynetwork.io/" target='_blank' rel="noreferrer">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com/LegacyNetworkio" rel='noreferrer' target="_blank">
          <TwitterIcon />
        </a>
        <a href="https://twitter.com/LegacyNetworkio" rel='noreferrer' target="_blank">
          <svg className={styles.tiktok} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2859 3333" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"><path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"/></svg>
          </a>
        <a href="https://www.linkedin.com/company/legacy-network-ag/mycompany/" rel='noreferrer' target="_blank">
          <LinkedIn />
        </a>
        <a href="https://twitter.com/LegacyNetworkio" rel='noreferrer' target="_blank">
          <RedditIcon />
        </a>
      </div>
      <div className={styles['rights-container']}>
        <div>
          <svg
            width="865"
            height="86"
            viewBox="0 0 865 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34 30.5C35.2 66.9 11.8333 82.3333 0 85.5L865 84C842.2 84 832.167 60.6667 830 49C833.2 13 804 1.33333 789 0H74.5C42.9 0 34.3333 20.3333 34 30.5Z"
              fill="#D9D9D9"
            />
          </svg>
          <p>
            ©
            {' '}
            {date.getFullYear()} Legacy Network AG - All rights reserved 
          </p>
        </div>
      </div>
      {/* <div className={`${styles.address}`}>
        <p>LEGACY Network AG, Aeulenstrasse 74, 9490 Vaduz, Liechtenstein</p>
      </div> */}
      {/* <div className="footer__end">
        {date.getFullYear()}
        {' '}
        Legacy Network AG - All right reserved
      </div> */}
    </footer>
  );
}

export default Footer;
