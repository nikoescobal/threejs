/* eslint-disable no-unused-vars */
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import DiscordIcon from '../../public/icons/discord.svg';
import useStore from '../../store/store';
import Link from 'next/link';
import styles from './footer.module.scss';
import Logo from '../../public/logo-cropped.png';
import LogoContainer from '../../public/footer/logo-container.svg';
import RightContainer from '../../public/footer/rights-container.svg';
import Image from 'next/image';

function Footer() {
  const date = new Date();
  const { isDarkMode } = useStore((state) => state);

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
          {/* <div className={`${styles.footer__column}`}>
            <div className={`${styles.footer__column__items__wrapper}`}>
              <Link href="/" className={`${styles.footer__column__item}`}>
                Projects
              </Link>
              <Link href="/" className={`${styles.footer__column__item}`}>
                Marketplace
              </Link>
              <Link href="/" className={`${styles.footer__column__item}`}>
                Governance
              </Link>
              <Link href="/" className={`${styles.footer__column__item}`}>
                Discord
              </Link>
            </div>
          </div> */}
          <div className={`${styles.footer__column}`}>
            {/* <span className={`${styles.footer__column__title}`}>Company</span> */}
            <div className={`${styles.footer__column__items__wrapper}`}>
              <Link href="/" className={`${styles.footer__column__item}`}>
                Newsletter
              </Link>
              <Link href="/" className={`${styles.footer__column__item}`}>
                LinkedIn
              </Link>
              <Link href="/" className={`${styles.footer__column__item}`}>
                Youtube
              </Link>
              <Link href="/" className={`${styles.footer__column__item}`}>
                Instagram
              </Link>
              <Link href="/" className={`${styles.footer__column__item}`}>
                Twitter
              </Link>
            </div>
          </div>
          <div className={`${styles.footer__column}`}>
            {/* <span className={`${styles.footer__column__title}`}>Contact Us</span> */}
            <div className={`${styles.items__wrapper}`}>
              <span className={`${styles.footer__column__ite}`}>
                hello@legacynetwork.io
              </span>
              <span className={`${styles.footer__column__item}`}>
                Äulestr. 74
              </span>
              <span href="/" className={`${styles.footer__column__item}`}>
                9490 Vaduz
              </span>
              <span href="/" className={`${styles.footer__column__item}`}>
                Liechtenstein
              </span>
              <span href="/" className={`${styles.footer__column__item}`}>
                0002.683.628-2
              </span>
              {/* <div className={`${styles.footer__socials}`}>
                <Link href="/" target="_blank">
                  <TwitterIcon />
                </Link>
                <Link href="/" target="_blank">
                  <FacebookIcon />
                </Link>
                <Link href="/" target="_blank">
                  <InstagramIcon />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
        <div className={`${styles.footer__column}`}>
          <img src="logo-2.png" className={`${styles.footer__column__logo}`} alt="" />
        </div>
      </section>
      {/* <div className={styles['logo-container']}>
        <div>
          <svg width="267" height="227" className={styles.shape} viewBox="0 0 267 227" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M202 101.654C187.6 6.8543 235 0.15457 267 0.154297H0V226.654C0.4 170.654 59.5 165.987 89 170.654C188.6 187.454 205.833 131.654 202 101.654Z" fill="#D9D9D9"/>
          </svg>
          <img src={Logo.src} className={styles.logo} alt="" />
          <div>

          </div>
        
        </div>
      </div> */}
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
        <TelegramIcon />
        {/* <DiscordIcon /> */}
        <InstagramIcon />
        <TwitterIcon />
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
