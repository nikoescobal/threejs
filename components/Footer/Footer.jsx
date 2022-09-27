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
          <div className={`${styles.footer__column}`}>
            {/* <span className={`${styles.footer__column__title}`}>Resources</span> */}
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
          </div>
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
            <div className={`${styles.footer__column__items__wrapper}`}>
              <a href="mailto:hello@legacynetwork.io" className={`${styles.footer__column__item}`}>
                Contact
              </a>
              <Link href={"/"} className={`${styles.footer__column__item}`}>
                Äulestr. 74
              </Link>
              <Link href="/" className={`${styles.footer__column__item}`}>
                9490 Vaduz
              </Link>
              <Link href="/" className={`${styles.footer__column__item}`}>
                Liechtenstein
              </Link>
              <Link href="/" className={`${styles.footer__column__item}`}>
                0002.683.628-2
              </Link>
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
        <svg width="39" height="31" viewBox="0 0 39 31" fill="white" xmlns="http://www.w3.org/2000/svg">
<path d="M32.6152 2.89402C30.1591 1.73792 27.5265 0.883417 24.7734 0.397521C24.7489 0.392608 24.7235 0.395774 24.7008 0.406581C24.6781 0.417388 24.6591 0.435301 24.6466 0.457839C24.3095 1.0761 23.9339 1.88202 23.6706 2.51871C20.7507 2.06337 17.7823 2.06337 14.8624 2.51871C14.5692 1.81309 14.2385 1.12507 13.872 0.457839C13.8596 0.435023 13.8408 0.416705 13.8181 0.405329C13.7954 0.393953 13.77 0.39006 13.7452 0.39417C10.9937 0.880066 8.36106 1.73457 5.90338 2.89235C5.88223 2.9016 5.86431 2.91739 5.85201 2.93758C0.856385 10.603 -0.512917 18.0791 0.159694 25.4614C0.161566 25.4795 0.166943 25.497 0.175498 25.5128C0.184053 25.5286 0.195607 25.5425 0.209458 25.5535C3.12527 27.7693 6.37748 29.4571 9.82989 30.5465C9.85395 30.5543 9.87969 30.5542 9.90375 30.5465C9.92781 30.5387 9.94906 30.5235 9.96473 30.503C10.7064 29.4642 11.3677 28.3667 11.9328 27.214C11.9665 27.1469 11.9344 27.0665 11.867 27.0397C10.83 26.6321 9.82521 26.1402 8.8619 25.5686C8.84459 25.5583 8.83001 25.5437 8.81946 25.526C8.8089 25.5084 8.80271 25.4883 8.80144 25.4675C8.80017 25.4467 8.80385 25.426 8.81216 25.4071C8.82047 25.3882 8.83315 25.3717 8.84906 25.3592C9.05133 25.2033 9.25359 25.0408 9.44623 24.8783C9.46356 24.8637 9.48445 24.8544 9.50656 24.8514C9.52867 24.8485 9.55113 24.852 9.57144 24.8615C15.8754 27.8171 22.7026 27.8171 28.9327 24.8615C28.9531 24.8514 28.9757 24.8474 28.9982 24.8501C29.0206 24.8528 29.0418 24.862 29.0595 24.8766C29.2521 25.0408 29.4528 25.2033 29.6567 25.3592C29.6727 25.3714 29.6856 25.3877 29.6942 25.4064C29.7028 25.4252 29.7068 25.4458 29.7058 25.4666C29.7049 25.4873 29.699 25.5075 29.6887 25.5253C29.6785 25.5431 29.6642 25.558 29.647 25.5686C28.6871 26.145 27.6886 26.6326 26.6404 27.038C26.6243 27.0441 26.6096 27.0537 26.5973 27.0662C26.5851 27.0787 26.5755 27.0938 26.5693 27.1104C26.5631 27.1271 26.5603 27.1449 26.5612 27.1628C26.5621 27.1806 26.5667 27.1981 26.5745 27.214C27.1524 28.365 27.8138 29.4608 28.541 30.5013C28.5561 30.5226 28.5772 30.5386 28.6013 30.547C28.6255 30.5554 28.6515 30.5558 28.6758 30.5482C32.1342 29.4619 35.3917 27.7732 38.3107 25.5535C38.325 25.5431 38.3369 25.5297 38.3458 25.5141C38.3546 25.4985 38.3602 25.4811 38.3621 25.4631C39.1647 16.928 37.0169 9.51226 32.665 2.94094C32.6543 2.91958 32.6366 2.90293 32.6152 2.89402ZM12.8751 20.966C10.9777 20.966 9.41251 19.1749 9.41251 16.9783C9.41251 14.78 10.9472 12.9906 12.8751 12.9906C14.8175 12.9906 16.3682 14.7951 16.3377 16.9783C16.3377 19.1766 14.803 20.966 12.8751 20.966ZM25.6772 20.966C23.7781 20.966 22.2146 19.1749 22.2146 16.9783C22.2146 14.78 23.7476 12.9906 25.6772 12.9906C27.6196 12.9906 29.1703 14.7951 29.1398 16.9783C29.1398 19.1766 27.6212 20.966 25.6772 20.966Z" fill="#979797"/>
        </svg>
        <TwitterIcon />
      </div>
      <div className={styles['rights-container']}>
        <div>
          <svg width="865" height="86" viewBox="0 0 865 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34 30.5C35.2 66.9 11.8333 82.3333 0 85.5L865 84C842.2 84 832.167 60.6667 830 49C833.2 13 804 1.33333 789 0H74.5C42.9 0 34.3333 20.3333 34 30.5Z" fill="#D9D9D9"/>
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
